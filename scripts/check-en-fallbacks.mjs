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

for (const file of targetFiles) {
  const html = fs.readFileSync(file, "utf8");

  const i18nElementRegex = /<([a-zA-Z0-9:-]+)([^>]*\sdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g;
  for (const match of html.matchAll(i18nElementRegex)) {
    const [, tag, , key, inner] = match;
    const fallbackText = inner.replace(/<[^>]*>/g, "").trim();
    if (fallbackText && jpCharPattern.test(fallbackText)) {
      issues.push(`${file}: data-i18n=\"${key}\" (${tag}) contains Japanese fallback text: ${fallbackText}`);
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
        issues.push(`${file}: data-i18n-attr (${tag}) has Japanese fallback in ${attr}=\"${fallbackValue}\"`);
      }
    }
  }
}

if (issues.length) {
  console.error("[check-en-fallbacks] Found Japanese fallback text in en pages:\n");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("[check-en-fallbacks] OK: No Japanese fallback text found in data-i18n/data-i18n-attr areas.");
