import fs from "node:fs";

const targetFiles = [
  "en/index.html",
  "en/faq/index.html",
  "en/characters/index.html",
  "en/rackets/index.html",
  "en/courts/index.html",
  "en/techniques/index.html",
  "en/tier/index.html",
];

const jpCharPattern = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/u;
const issues = [];

const requiredStaticChecks = [
  {
    selector: "button.filter-modal__apply",
    regex: /<button([^>]*\sclass="[^"]*\bfilter-modal__apply\b[^"]*"[^>]*)>([\s\S]*?)<\/button>/g,
    requiredDataAttrs: ["data-i18n"],
    requiredAttrMappings: {},
    attrGroupIndex: 1,
    fallbackFromMatch: (match) => match[2].replace(/<[^>]*>/g, "").trim(),
  },
  {
    selector: "#tips-count",
    regex: /<([a-zA-Z0-9:-]+)([^>]*\sid="tips-count"[^>]*)>([\s\S]*?)<\/\1>/g,
    requiredDataAttrs: ["data-i18n"],
    requiredAttrMappings: {},
    attrGroupIndex: 2,
    fallbackFromMatch: (match) => match[3].replace(/<[^>]*>/g, "").trim(),
  },
  {
    selector: "#court-prediction-current",
    regex: /<select([^>]*\sid="court-prediction-current"[^>]*)>/g,
    requiredDataAttrs: ["data-i18n-attr"],
    requiredAttrMappings: { "aria-label": "courtPrediction.currentCourt" },
    attrGroupIndex: 1,
    fallbackFromMatch: (match) => {
      const attrs = match[1] || "";
      const attrMatch = attrs.match(/\saria-label="([^"]*)"/);
      return attrMatch?.[1]?.trim() ?? "";
    },
  },
  {
    selector: ".official-tier-tabs",
    regex: /<div([^>]*\sclass="[^"]*\bofficial-tier-tabs\b[^"]*"[^>]*)>/g,
    requiredDataAttrs: ["data-i18n-attr"],
    requiredAttrMappings: { "aria-label": "aria.officialTierTabs" },
    fallbackFromMatch: (match) => {
      const attrs = match[1] || "";
      const attrMatch = attrs.match(/\saria-label="([^"]*)"/);
      return attrMatch?.[1]?.trim() ?? "";
    },
  },
];

function parseI18nAttrMap(value) {
  return new Map(
    value
      .split(",")
      .map((pair) => pair.trim())
      .filter(Boolean)
      .map((pair) => {
        const [attr, key] = pair.split(":").map((part) => part?.trim());
        return [attr, key];
      })
      .filter(([attr, key]) => attr && key),
  );
}

for (const file of targetFiles) {
  const html = fs.readFileSync(file, "utf8");

  const i18nElementRegex = /<([a-zA-Z0-9:-]+)([^>]*\sdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g;
  for (const match of html.matchAll(i18nElementRegex)) {
    const [, tag, , key, inner] = match;
    const fallbackText = inner.replace(/<[^>]*>/g, "").trim();
    if (fallbackText && jpCharPattern.test(fallbackText)) {
      issues.push(`${file}: data-i18n="${key}" (${tag}) contains Japanese fallback text: ${fallbackText}`);
    }
  }

  const i18nAttrRegex = /<([a-zA-Z0-9:-]+)([^>]*\sdata-i18n-attr="([^"]+)"[^>]*)>/g;
  for (const match of html.matchAll(i18nAttrRegex)) {
    const [, tag, attrs, mapping] = match;
    for (const pair of mapping.split(",")) {
      const [attr] = pair.split(":").map((part) => part?.trim());
      if (!attr) continue;
      const attrMatch = attrs.match(new RegExp(`${attr}="([^"]*)"`));
      const fallbackValue = attrMatch?.[1]?.trim() ?? "";
      if (fallbackValue && jpCharPattern.test(fallbackValue)) {
        issues.push(`${file}: data-i18n-attr (${tag}) has Japanese fallback in ${attr}="${fallbackValue}"`);
      }
    }
  }

  for (const check of requiredStaticChecks) {
    const matches = [...html.matchAll(check.regex)];
    if (!matches.length) {
      issues.push(`${file}: missing required element (${check.selector})`);
      continue;
    }

    for (const match of matches) {
      const attrs = match[check.attrGroupIndex ?? 1] || "";

      for (const requiredAttr of check.requiredDataAttrs) {
        if (!new RegExp(`\\s${requiredAttr}="[^"]+"`).test(attrs)) {
          issues.push(`${file}: ${check.selector} is missing ${requiredAttr}`);
        }
      }

      if (check.requiredAttrMappings && Object.keys(check.requiredAttrMappings).length > 0) {
        const mapMatch = attrs.match(/\sdata-i18n-attr="([^"]+)"/);
        if (!mapMatch) {
          issues.push(`${file}: ${check.selector} is missing data-i18n-attr mapping`);
        } else {
          const currentMappings = parseI18nAttrMap(mapMatch[1]);
          for (const [attr, key] of Object.entries(check.requiredAttrMappings)) {
            if (currentMappings.get(attr) !== key) {
              issues.push(`${file}: ${check.selector} data-i18n-attr must include ${attr}:${key}`);
            }
          }
        }
      }

      const fallbackText = check.fallbackFromMatch(match);
      if (fallbackText && jpCharPattern.test(fallbackText)) {
        issues.push(`${file}: ${check.selector} contains Japanese fallback text: ${fallbackText}`);
      }
    }
  }
}

if (issues.length) {
  console.error("[check-en-fallbacks] Found fallback issues in en pages:\n");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("[check-en-fallbacks] OK: No Japanese fallback text found and key static en UI fallbacks are configured.");
