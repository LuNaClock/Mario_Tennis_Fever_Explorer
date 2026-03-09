import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const mainJsPath = path.join(root, "js", "main.js");
const siteOrigin = "https://mariotennis-fever-explorer.ai-lifebook.com";

const routes = [
  {
    path: "/",
    sectionId: "faq",
    title: "マリオテニスフィーバー Explorer | FAQ・キャラ・ラケット・Tier",
    description: "マリオテニスフィーバーのFAQ・キャラクター・ラケット・コート・Tips・Tierを横断して確認できる参照サイト。",
    ogType: "website",
  },
  { path: "/faq/", sectionId: "faq", title: "FAQ | マリオテニスフィーバー Explorer", description: "初心者向け質問、Tier基準、勝てないときの見直し方をFAQ形式で素早く確認できます。", ogType: "article" },
  { path: "/characters/", sectionId: "characters", title: "キャラクター一覧 | マリオテニスフィーバー Explorer", description: "全キャラクターのタイプや主要ステータス、特殊能力を比較しやすい一覧ページです。", ogType: "article" },
  { path: "/rackets/", sectionId: "rackets", title: "ラケット一覧 | マリオテニスフィーバー Explorer", description: "ラケットの種類・効果タイミング・性能テキストを比較できるデータ一覧です。", ogType: "article" },
  { path: "/courts/", sectionId: "courts", title: "コート一覧 | マリオテニスフィーバー Explorer", description: "コートごとのたまあし・バウンド特性とメモを一覧で確認できる比較ページです。", ogType: "article" },
  { path: "/techniques/", sectionId: "techniques", title: "Tips・テクニック | マリオテニスフィーバー Explorer", description: "実戦で役立つ操作のコツや仕様メモをカテゴリ別にまとめたTipsセクションです。", ogType: "article" },
  { path: "/tier/", sectionId: "tier", title: "Tier表 | マリオテニスフィーバー Explorer", description: "キャラクター・ラケットのTier表を参照し、条件別に評価を整理できます。", ogType: "article" },
];

const localizedRoutes = [
  {
    path: "/en/",
    sectionId: "faq",
    title: "Mario Tennis Fever Explorer | FAQ, Characters, Rackets, Tier",
    description: "Reference site for Mario Tennis Fever FAQs, characters, rackets, tier lists, courts, and tips.",
    ogType: "website",
    lang: "en",
    localePathPrefix: "/en",
  },
  { path: "/en/faq/", sectionId: "faq", title: "FAQ | Mario Tennis Fever Explorer", description: "Quickly check beginner FAQs, tier criteria, and how to review your play when you are losing.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/characters/", sectionId: "characters", title: "Character List | Mario Tennis Fever Explorer", description: "A comparison page for all Mario Tennis Fever character types, key stats, and special abilities.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/rackets/", sectionId: "rackets", title: "Racket List | Mario Tennis Fever Explorer", description: "Data list to compare racket types, effect timing, and in-game performance text.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/courts/", sectionId: "courts", title: "Court List | Mario Tennis Fever Explorer", description: "Comparison page for each court's ball speed, bounce characteristics, and notes.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/techniques/", sectionId: "techniques", title: "Tips & Techniques | Mario Tennis Fever Explorer", description: "Tips section that organizes useful controls and mechanic notes by category.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/tier/", sectionId: "tier", title: "Tier Board | Mario Tennis Fever Explorer", description: "Browse character and racket tier rankings and organize evaluations by conditions.", ogType: "article", lang: "en", localePathPrefix: "/en" },
];

const allRoutes = [...routes, ...localizedRoutes];

function mapAlternatePath(routePath) {
  if (routePath === "/") return { ja: "/", en: "/en/" };
  if (routePath.startsWith("/en")) {
    const jaPath = routePath.replace(/^\/en/, "") || "/";
    return { ja: jaPath, en: routePath };
  }
  return { ja: routePath, en: routePath === "/" ? "/en/" : `/en${routePath}` };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildSeoTags(route) {
  const canonical = `${siteOrigin}${route.path === "/" ? "/" : route.path}`;
  const alternates = mapAlternatePath(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonicalEscaped = escapeHtml(canonical);
  const jaAlternate = escapeHtml(`${siteOrigin}${alternates.ja}`);
  const enAlternate = escapeHtml(`${siteOrigin}${alternates.en}`);

  return [
    `  <title>${title}</title>`,
    `  <meta name="description" content="${description}" />`,
    `  <link rel="canonical" href="${canonicalEscaped}" />`,
    `  <link rel="alternate" hreflang="ja" href="${jaAlternate}" />`,
    `  <link rel="alternate" hreflang="en" href="${enAlternate}" />`,
    `  <link rel="alternate" hreflang="x-default" href="${escapeHtml(`${siteOrigin}/`)}" />`,
    `  <meta property="og:type" content="${route.ogType}" />`,
    `  <meta property="og:title" content="${title}" />`,
    `  <meta property="og:description" content="${description}" />`,
    `  <meta property="og:url" content="${canonicalEscaped}" />`,
    `  <meta property="og:site_name" content="${route.lang === "en" ? "Mario Tennis Fever Explorer" : "マリオテニスフィーバー Explorer"}" />`,
  ].join("\n");
}

function stripSeoTags(html) {
  return html
    .replace(/^\s*<title>[\s\S]*?<\/title>\n?/m, "")
    .replace(/^\s*<meta name="description"[^\n]*\n?/m, "")
    .replace(/^\s*<link rel="canonical"[^\n]*\n?/gm, "")
    .replace(/^\s*<link rel="alternate"[^\n]*\n?/gm, "")
    .replace(/^\s*<meta property="og:[^\n]*\n?/gm, "");
}

function localizeInternalLinks(html, localePrefix = "") {
  const mappings = ["faq", "characters", "rackets", "courts", "techniques", "tier"];
  return mappings.reduce((acc, segment) => {
    const prefixed = `${localePrefix}/${segment}`;
    return acc
      .replaceAll(`href="/${segment}/"`, `href="${prefixed}/"`)
      .replaceAll(`href="/${segment}/#`, `href="${prefixed}/#`)
      .replaceAll(`href="/${segment}"`, `href="${prefixed}"`)
      .replaceAll(`href="/${segment}#`, `href="${prefixed}#`);
  }, html);
}

function renderHtml(template, route) {
  const withoutSeo = stripSeoTags(template);
  const withSeo = withoutSeo.replace(/(<meta name="viewport"[^\n]*\n)/, `$1${buildSeoTags(route)}\n`);
  const withLang = route.lang ? withSeo.replace(/<html lang="[^"]+">/, `<html lang="${route.lang}">`) : withSeo;
  const withBodySection = withLang.replace(/<body[^>]*>/, `<body data-route-section="${route.sectionId}">`);
  const localePrefix = route.localePathPrefix || "";

  const linked = localizeInternalLinks(withBodySection, localePrefix);
  return route.lang === "en" ? applyEnglishFallbacks(linked) : linked;
}

function loadEnTranslations() {
  const source = fs.readFileSync(mainJsPath, "utf8");
  const match = source.match(/(const translations = \{[\s\S]*?\r?\n)(?=const localeSelect)/);
  if (!match) {
    throw new Error("Failed to load translations from js/main.js");
  }

  const translations = new Function(`${match[1]}\nreturn translations;`)();
  return translations.en ?? {};
}

const enTranslations = loadEnTranslations();

function tEn(key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), enTranslations);
}

function setAttr(startTag, attr, value) {
  const escaped = escapeHtml(value);
  const attrPattern = new RegExp(`(${attr}=")(.*?)(")`, "i");
  if (attrPattern.test(startTag)) {
    return startTag.replace(attrPattern, `$1${escaped}$3`);
  }
  return startTag.replace(/>$/, ` ${attr}="${escaped}">`);
}

function applyEnglishFallbacks(html) {
  const withI18nText = html.replace(/<([a-zA-Z0-9:-]+)([^>]*\sdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g, (all, tag, attrs, key) => {
    const translated = tEn(key);
    if (typeof translated !== "string") return all;
    return `<${tag}${attrs}>${escapeHtml(translated)}</${tag}>`;
  });

  const withI18nAttrs = withI18nText.replace(/<([a-zA-Z0-9:-]+)([^>]*\sdata-i18n-attr="([^"]+)"[^>]*)>/g, (all, tag, attrs, mapping) => {
    let startTag = `<${tag}${attrs}>`;
    for (const pair of mapping.split(",")) {
      const [attr, key] = pair.split(":").map((part) => part?.trim());
      if (!attr || !key) continue;
      const translated = tEn(key);
      if (typeof translated === "string") {
        startTag = setAttr(startTag, attr, translated);
      }
    }
    return startTag;
  });

  return withI18nAttrs
    .replace('data-nav-label="キャラ"', 'data-nav-label="Characters"')
    .replace('data-nav-label="ラケット"', 'data-nav-label="Rackets"')
    .replace('data-nav-label="コート"', 'data-nav-label="Courts"');
}

const baseTemplate = fs.readFileSync(indexPath, "utf8");

for (const route of allRoutes) {
  const rendered = renderHtml(baseTemplate, route);
  if (route.path === "/" || route.path === "/en/") {
    const outputPath = route.path === "/" ? indexPath : path.join(root, "en", "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, rendered);
    continue;
  }

  const dir = path.join(root, route.path.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), rendered);
}

console.log(`Generated ${allRoutes.length} prerendered HTML files (full static mode).`);
