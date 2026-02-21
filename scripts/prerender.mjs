import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const siteOrigin = "https://mariotennis-fever-explorer.ai-lifebook.com";

const routes = [
  {
    path: "/",
    sectionId: "faq",
    title: "マリオテニスフィーバー Explorer | FAQ・キャラ・ラケット・Tier",
    description: "マリオテニスフィーバーのFAQ・キャラクター・ラケット・コート・Tips・Tierを横断して確認できる参照サイト。",
    ogType: "website",
  },
  { path: "/faq", sectionId: "faq", title: "FAQ | マリオテニスフィーバー Explorer", description: "初心者向け質問、Tier基準、勝てないときの見直し方をFAQ形式で素早く確認できます。", ogType: "article" },
  { path: "/characters", sectionId: "characters", title: "キャラクター一覧 | マリオテニスフィーバー Explorer", description: "全キャラクターのタイプや主要ステータス、特殊能力を比較しやすい一覧ページです。", ogType: "article" },
  { path: "/rackets", sectionId: "rackets", title: "ラケット一覧 | マリオテニスフィーバー Explorer", description: "ラケットの種類・効果タイミング・性能テキストを比較できるデータ一覧です。", ogType: "article" },
  { path: "/courts", sectionId: "courts", title: "コート一覧 | マリオテニスフィーバー Explorer", description: "コートごとのたまあし・バウンド特性とメモを一覧で確認できる比較ページです。", ogType: "article" },
  { path: "/techniques", sectionId: "techniques", title: "Tips・テクニック | マリオテニスフィーバー Explorer", description: "実戦で役立つ操作のコツや仕様メモをカテゴリ別にまとめたTipsセクションです。", ogType: "article" },
  { path: "/tier", sectionId: "tier", title: "Tier表 | マリオテニスフィーバー Explorer", description: "キャラクター・ラケットのTier表を参照し、条件別に評価を整理できます。", ogType: "article" },
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
  { path: "/en/faq", sectionId: "faq", title: "FAQ | Mario Tennis Fever Explorer", description: "Quickly check beginner FAQs, tier criteria, and how to review your play when you are losing.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/characters", sectionId: "characters", title: "Character List | Mario Tennis Fever Explorer", description: "A comparison page for all Mario Tennis Fever character types, key stats, and special abilities.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/rackets", sectionId: "rackets", title: "Racket List | Mario Tennis Fever Explorer", description: "Data list to compare racket types, effect timing, and in-game performance text.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/courts", sectionId: "courts", title: "Court List | Mario Tennis Fever Explorer", description: "Comparison page for each court's ball speed, bounce characteristics, and notes.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/techniques", sectionId: "techniques", title: "Tips & Techniques | Mario Tennis Fever Explorer", description: "Tips section that organizes useful controls and mechanic notes by category.", ogType: "article", lang: "en", localePathPrefix: "/en" },
  { path: "/en/tier", sectionId: "tier", title: "Tier Board | Mario Tennis Fever Explorer", description: "Browse character and racket tier rankings and organize evaluations by conditions.", ogType: "article", lang: "en", localePathPrefix: "/en" },
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

function extractMainAndSections(html) {
  const mainMatch = html.match(/<main class="container">[\s\S]*?<\/main>/);
  if (!mainMatch) {
    throw new Error("Could not find <main class=\"container\"> block in index.html");
  }

  const mainHtml = mainMatch[0];
  const sections = mainHtml.match(/<section class="section[\s\S]*?<\/section>/g) || [];
  return { mainHtml, sections };
}

function pickSectionById(sections, sectionId) {
  const target = sections.find((sectionHtml) => new RegExp(`id="${sectionId}"`).test(sectionHtml));
  if (!target) {
    throw new Error(`Could not find section id=${sectionId}`);
  }
  return target;
}

function buildHybridLoaderScript(sectionId) {
  const safeSectionId = JSON.stringify(sectionId);
  return `  <script type="module">\n(async () => {\n  const targetSectionId = ${safeSectionId};\n  const isEnglishPath = window.location.pathname.startsWith('/en');\n  const entryPath = isEnglishPath ? '/en/index.html' : '/index.html';\n  const fallbackBase = isEnglishPath ? '/en/#' : '/#';\n\n  try {\n    const response = await fetch(entryPath, { credentials: 'same-origin' });\n    if (!response.ok) throw new Error('index fetch failed');\n\n    const html = await response.text();\n    const parser = new DOMParser();\n    const sourceDoc = parser.parseFromString(html, 'text/html');\n\n    const currentMain = document.querySelector('main.container');\n    const sourceMain = sourceDoc.querySelector('main.container');\n\n    if (!currentMain || !sourceMain) throw new Error('main missing');\n\n    const existingSectionIds = new Set(\n      Array.from(currentMain.querySelectorAll('section[id]')).map((section) => section.id)\n    );\n\n    sourceMain.querySelectorAll('section[id]').forEach((section) => {\n      if (!existingSectionIds.has(section.id)) {\n        currentMain.append(document.importNode(section, true));\n      }\n    });\n\n    document.body.dataset.routeSection = targetSectionId;\n    await import('/js/main.js');\n  } catch (error) {\n    window.location.replace(fallbackBase + targetSectionId);\n  }\n})();\n  </script>`;
}

function renderHtml(template, route, sections) {
  const withoutSeo = stripSeoTags(template);
  const withSeo = withoutSeo.replace(/(<meta name="viewport"[^\n]*\n)/, `$1${buildSeoTags(route)}\n`);
  const withLang = route.lang ? withSeo.replace(/<html lang="[^"]+">/, `<html lang="${route.lang}">`) : withSeo;
  const withBodySection = withLang.replace(/<body[^>]*>/, `<body data-route-section="${route.sectionId}">`);
  const localePrefix = route.localePathPrefix || "";

  if (route.path === "/" || route.path === "/en/") {
    return withBodySection
      .replaceAll('href="/faq"', `href="${localePrefix}/faq"`)
      .replaceAll('href="/characters"', `href="${localePrefix}/characters"`)
      .replaceAll('href="/rackets"', `href="${localePrefix}/rackets"`)
      .replaceAll('href="/courts"', `href="${localePrefix}/courts"`)
      .replaceAll('href="/techniques"', `href="${localePrefix}/techniques"`)
      .replaceAll('href="/tier"', `href="${localePrefix}/tier"`);
  }

  const targetSection = pickSectionById(sections, route.sectionId);
  const minimalMain = `<main class="container">\n    <nav class="section-nav" aria-label="セクションナビゲーション" data-i18n-attr="aria-label:aria.sectionNav">\n      <div class="section-nav__links js-section-nav" id="desktop-section-nav-links">\n        <a class="section-nav__item" href="${localePrefix}/faq" data-target="faq" data-i18n="nav.faq">FAQ</a>\n        <a class="section-nav__item" href="${localePrefix}/characters" data-target="characters" data-i18n="nav.characters">キャラ</a>\n        <a class="section-nav__item" href="${localePrefix}/rackets" data-target="rackets" data-i18n="nav.rackets">ラケット</a>\n        <a class="section-nav__item" href="${localePrefix}/courts" data-target="courts" data-i18n="nav.courts">コート</a>\n        <a class="section-nav__item" href="${localePrefix}/techniques" data-target="techniques">Tips</a>\n        <a class="section-nav__item" href="${localePrefix}/tier" data-target="tier" data-i18n="nav.tier">Tier</a>\n      </div>\n      <button type="button" class="section-nav__toggle" data-section-nav-toggle aria-expanded="true" aria-controls="desktop-section-nav-links" aria-label="セクションナビをたたむ" data-i18n-attr="aria-label:aria.collapseNav"></button>\n    </nav>\n\n${targetSection}\n  </main>`;

  const withMinimalMain = withBodySection.replace(/<main class="container">[\s\S]*?<\/main>/, minimalMain);
  const withoutMainBundleScript = withMinimalMain.replace(/\s*<script type="module" src="\/js\/main\.js"><\/script>\s*/m, "\n");
  const hybridLoader = buildHybridLoaderScript(route.sectionId);

  return withoutMainBundleScript
    .replaceAll('href="/faq"', `href="${localePrefix}/faq"`)
    .replaceAll('href="/characters"', `href="${localePrefix}/characters"`)
    .replaceAll('href="/rackets"', `href="${localePrefix}/rackets"`)
    .replaceAll('href="/courts"', `href="${localePrefix}/courts"`)
    .replaceAll('href="/techniques"', `href="${localePrefix}/techniques"`)
    .replaceAll('href="/tier"', `href="${localePrefix}/tier"`)
    .replace(/<\/body>/, `${hybridLoader}\n</body>`);
}

const baseTemplate = fs.readFileSync(indexPath, "utf8");
const { sections } = extractMainAndSections(baseTemplate);

for (const route of allRoutes) {
  const rendered = renderHtml(baseTemplate, route, sections);
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

console.log(`Generated ${allRoutes.length} prerendered HTML files (hybrid SPA mode).`);
