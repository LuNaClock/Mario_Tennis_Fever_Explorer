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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildSeoTags(route) {
  const canonical = `${siteOrigin}${route.path === "/" ? "/" : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonicalEscaped = escapeHtml(canonical);

  return [
    `  <title>${title}</title>`,
    `  <meta name="description" content="${description}" />`,
    `  <link rel="canonical" href="${canonicalEscaped}" />`,
    `  <meta property="og:type" content="${route.ogType}" />`,
    `  <meta property="og:title" content="${title}" />`,
    `  <meta property="og:description" content="${description}" />`,
    `  <meta property="og:url" content="${canonicalEscaped}" />`,
    '  <meta property="og:site_name" content="マリオテニスフィーバー Explorer" />',
  ].join("\n");
}

function stripSeoTags(html) {
  return html
    .replace(/^\s*<title>[\s\S]*?<\/title>\n?/m, "")
    .replace(/^\s*<meta name="description"[^\n]*\n?/m, "")
    .replace(/^\s*<link rel="canonical"[^\n]*\n?/gm, "")
    .replace(/^\s*<meta property="og:[^\n]*\n?/gm, "");
}

function renderHtml(template, route) {
  const withoutSeo = stripSeoTags(template);
  const withSeo = withoutSeo.replace(/(<meta name="viewport"[^\n]*\n)/, `$1${buildSeoTags(route)}\n`);
  return withSeo.replace(/<body[^>]*>/, `<body data-route-section="${route.sectionId}">`);
}

const baseTemplate = fs.readFileSync(indexPath, "utf8");

for (const route of routes) {
  const rendered = renderHtml(baseTemplate, route);
  if (route.path === "/") {
    fs.writeFileSync(indexPath, rendered);
    continue;
  }

  const dir = path.join(root, route.path.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), rendered);
}

console.log(`Generated ${routes.length} prerendered HTML files.`);
