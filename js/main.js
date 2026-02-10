import { characters, rackets, changelog } from "../data.js";

const translations = {
  ja: {
    site: { pageTitle: "マリオテニスフィーバー データ参照サイト", pageDescription: "マリオテニスフィーバーのキャラクターやラケット、システム関連データを一覧で確認できる参照サイト。", title: "マリオテニスフィーバー Explorer", language: "Language", lead: "キャラクターやラケットの特徴などを確認できるデータまとめサイトです。フィルタ・ソートで目的の情報を整理しながら参照できます。" },
    nav: { characters: "キャラ", rackets: "ラケット", tier: "Tier" },
    section: { characters: { title: "キャラクター一覧", description: "タイプ別の特徴やパラメータを比較できます。" }, rackets: { title: "ラケット一覧", description: "効果やタイミングを比較できます。" }, tips: { description: "試合で役立つ操作のポイントを素早く確認できます。" }, tier: { title: "Tier表", description: "キャラとラケットを自分基準でランク付けできます。" } },
    filter: { searchAndFilter: "検索・絞り込み", search: "検索", type: "タイプ", special: "特殊能力", favoritesOnly: "お気に入りのみ", sortBy: "ソート項目", order: "並び順", category: "種類", timing: "効果タイミング" },
    modal: { characterFilter: "キャラクターの検索・絞り込み", racketFilter: "ラケットの検索・絞り込み" },
    placeholder: { characterSearch: "キャラクター名で検索", racketSearch: "ラケット名で検索" },
    footer: { note: "データは仮入力を含みます。後日更新予定です。", changelog: "更新履歴" },
    stat: { speed: "スピード", power: "パワー", control: "コントロール", spin: "スピン" },
    sort: { name: "名前" },
    order: { game: "ゲーム内順", asc: "昇順", desc: "降順", high: "数値が高い順", low: "数値が低い順" },
    common: { any: "指定なし", yes: "あり", no: "なし", wip: "仮実装", count: "{{count}}件表示", showCount: "{{count}}件を表示", searchHit: "検索ヒット: {{count}}件", noCharacter: "一致するキャラクターが見つかりません。", noRacket: "一致するラケットが見つかりません。", language: "言語" },
    accordion: { special: "特殊能力", gameText: "ゲーム内テキスト", details: "全項目を見る", video: "動画で効果を確認する" },
    video: { unavailable: "動画は準備中です。", checking: "動画の有無を確認中です…", openYoutube: "YouTubeで開く" },
    chip: { type: "タイプ", search: "検索", special: "特殊能力", favorites: "お気に入り", sort: "ソート", order: "並び順", category: "種類", timing: "効果タイミング", yes: "あり", no: "なし" },
    aria: { sectionNav: "セクションナビゲーション", mobileNav: "モバイルセクションナビ", close: "閉じる", showChangelog: "更新履歴を表示", collapseNav: "セクションナビをたたむ", expandNav: "セクションナビを表示" },
    type: { "オールラウンド": "オールラウンド", "テクニック": "テクニック", "パワー": "パワー", "ディフェンス": "ディフェンス", "トリッキー": "トリッキー", "スピード": "スピード" },
    category: { "妨害": "妨害", "強化": "強化", "その他": "その他", "不明": "不明" },
    timing: { "即時": "即時", "バウンド時": "バウンド時", "不明": "不明" },
    tierValue: { hard: "ハード", clay: "クレー", grass: "グラス", singles: "シングルス", doubles: "ダブルス", fever: "フィーバー" },
    meta: { iconSuffix: "のアイコン" },
    changelog: { title: "更新履歴" },
    favorite: { addCharacter: "お気に入りに追加", removeCharacter: "お気に入り解除", addRacket: "お気に入りに追加", removeRacket: "お気に入り解除" },
    tier: { characterBoard: "キャラTier", racketBoard: "ラケットTier", poolTitle: "未配置アイコン", modalTitle: "Tier行を編集", labelName: "ラベル名", labelColor: "背景色", clearRow: "行の中身をクリア", addAbove: "上に行追加", addBelow: "下に行追加", deleteRow: "行を削除", addItem: "行を追加", unassigned: "未配置", ruleTitle: "ルール条件", addGlobal: "全ルール共通Tierを追加", addConditional: "条件別Tierを追加", deleteProfile: "現在のTierを削除", courtType: "コート種別", gameMode: "ゲームモード", itemRule: "フィーバーラケット", globalLabel: "全ルール共通Tier", conditionalLabel: "条件別Tier", allConditions: "全条件", noProfiles: "該当するTierはありません", globalTab: "全ルール共通", conditionalTab: "条件別", profileDeleted: "Tierを削除しました", shareX: "Xへ画像投稿", saveImage: "画像で保存", shareXOpened: "X投稿画面を開きました", shareXFallback: "画像保存後にX投稿画面を開きました", shareXFailed: "X投稿画面を開けませんでした", imageSaved: "画像を保存しました", imageSaveFailed: "画像の保存に失敗しました" },
  },
  en: {
    site: { pageTitle: "Mario Tennis Fever Data Explorer", pageDescription: "Reference site for Mario Tennis Fever character, racket, and system data.", title: "Mario Tennis Fever Explorer", language: "Language", lead: "A reference site to compare character and racket traits with filters and sorting." },
    nav: { characters: "Characters", rackets: "Rackets", tier: "Tier" },
    section: { characters: { title: "Character List", description: "Compare traits and parameters by type." }, rackets: { title: "Racket List", description: "Compare effects and trigger timing." }, tips: { description: "Quickly review useful operation tips for matches." }, tier: { title: "Tier Board", description: "Rank characters and rackets by your own criteria." } },
    filter: { searchAndFilter: "Search / Filter", search: "Search", type: "Type", special: "Special", favoritesOnly: "Favorites only", sortBy: "Sort by", order: "Order", category: "Category", timing: "Effect timing" },
    modal: { characterFilter: "Character Search / Filter", racketFilter: "Racket Search / Filter" },
    placeholder: { characterSearch: "Search by character name", racketSearch: "Search by racket name" },
    footer: { note: "Some data is provisional and will be updated later.", changelog: "Changelog" },
    stat: { speed: "Speed", power: "Power", control: "Control", spin: "Spin" },
    sort: { name: "Name" },
    order: { game: "Game order", asc: "A → Z", desc: "Z → A", high: "High → Low", low: "Low → High" },
    common: { any: "Any", yes: "Yes", no: "None", wip: "Work in progress", count: "{{count}} shown", showCount: "Show {{count}}", searchHit: "Search hits: {{count}}", noCharacter: "No matching characters found.", noRacket: "No matching rackets found.", language: "Language" },
    accordion: { special: "Special", gameText: "In-game text", details: "Show all", video: "Watch effect video" },
    video: { unavailable: "Video is coming soon.", checking: "Checking video availability…", openYoutube: "Open on YouTube" },
    chip: { type: "Type", search: "Search", special: "Special", favorites: "Favorites", sort: "Sort", order: "Order", category: "Category", timing: "Effect timing", yes: "Yes", no: "No" },
    aria: { sectionNav: "Section navigation", mobileNav: "Mobile section navigation", close: "Close", showChangelog: "Show changelog", collapseNav: "Collapse section nav", expandNav: "Expand section nav" },
    type: { "オールラウンド": "All-Around", "テクニック": "Technical	", "パワー": "Powerful", "ディフェンス": "Defensive", "トリッキー": "Tricky", "スピード": "Speedy" },
    category: { "妨害": "Disruptive", "強化": "Boost", "その他": "Other", "不明": "Unknown" },
    timing: { "即時": "Instant", "バウンド時": "On Bounce", "不明": "Unknown" },
    tierValue: { hard: "Hard", clay: "Clay", grass: "Grass", singles: "Singles", doubles: "Doubles", fever: "Fever" },
    meta: { iconSuffix: " icon" },
    changelog: { title: "Changelog" },
    favorite: { addCharacter: "Add to favorites", removeCharacter: "Remove from favorites", addRacket: "Add to favorites", removeRacket: "Remove from favorites" },
    tier: { characterBoard: "Character Tier", racketBoard: "Racket Tier", poolTitle: "Unassigned Icons", modalTitle: "Edit Tier Row", labelName: "Label", labelColor: "Background color", clearRow: "Clear row", addAbove: "Add row above", addBelow: "Add row below", deleteRow: "Delete row", addItem: "Add row", unassigned: "Unassigned", ruleTitle: "Rule filters", addGlobal: "Add Global Tier", addConditional: "Add Conditional Tier", deleteProfile: "Delete Current Tier", courtType: "Court Type", gameMode: "Game Mode", itemRule: "Fever Racket", globalLabel: "Global Tier", conditionalLabel: "Conditional Tier", allConditions: "All Conditions", noProfiles: "No tier boards match this filter", globalTab: "Global", conditionalTab: "Conditional", profileDeleted: "Tier deleted", shareX: "Post Image to X", saveImage: "Save as Image", shareXOpened: "Opened X post dialog", shareXFallback: "Saved image and opened X post dialog", shareXFailed: "Failed to open X post dialog", imageSaved: "Image saved", imageSaveFailed: "Failed to save image" },
  },
};

const localeSelect = document.getElementById("locale-select");
const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
  ? navigator.languages
  : [navigator.language || "ja"];
const browserLocale = browserLanguages.some((lang) => String(lang).toLowerCase().startsWith("ja"))
  ? "ja"
  : "en";
let currentLocale = localStorage.getItem("locale") || browserLocale;
if (!translations[currentLocale]) {
  currentLocale = "ja";
}

function t(key, vars = {}) {
  const keys = key.split(".");
  let value = keys.reduce((acc, part) => (acc ? acc[part] : undefined), translations[currentLocale]);
  if (value == null) {
    value = keys.reduce((acc, part) => (acc ? acc[part] : undefined), translations.ja) ?? key;
  }
  if (typeof value !== "string") {
    return String(value);
  }
  return value.replace(/\{\{(\w+)\}\}/g, (_, name) => String(vars[name] ?? ""));
}

function localizeValue(value) {
  if (value && typeof value === "object") {
    return value[currentLocale] ?? value.ja ?? value.en ?? "";
  }
  return value;
}

function rawValue(value) {
  if (value && typeof value === "object") {
    return value.ja ?? value.en ?? "";
  }
  return value;
}

const statLabels = {
  speed: () => t("stat.speed"),
  power: () => t("stat.power"),
  control: () => t("stat.control"),
  spin: () => t("stat.spin"),
};

const characterSortLabels = {
  name: () => t("sort.name"),
  ...statLabels,
};

const maxStatValue = 5;
const mobileDetailsStatOrder = ["speed", "power", "control", "spin"];

function getStatTier(value) {
  return Math.min(maxStatValue, Math.max(1, Math.floor(value)));
}

const characterList = document.getElementById("character-list");
const racketList = document.getElementById("racket-list");
const characterCount = document.getElementById("character-count");
const racketCount = document.getElementById("racket-count");

const characterTypeFilter = document.getElementById("character-type-filter");
const characterSpecialFilter = document.getElementById("character-special-filter");
const characterSort = document.getElementById("character-sort");
const characterOrder = document.getElementById("character-order");
const characterSearch = document.getElementById("character-search");
const characterActiveFilters = document.getElementById("character-active-filters");
const characterSearchResults = document.getElementById("character-search-results");
const characterModalSearchResults = document.getElementById("character-modal-search-results");

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketOrder = document.getElementById("racket-order");
const racketSearch = document.getElementById("racket-search");
const racketActiveFilters = document.getElementById("racket-active-filters");
const racketSearchResults = document.getElementById("racket-search-results");
const racketModalSearchResults = document.getElementById("racket-modal-search-results");

const characterFavoriteFilter = document.getElementById("character-favorite-filter");
const racketFavoriteFilter = document.getElementById("racket-favorite-filter");

const FAVORITE_STORAGE_KEYS = {
  characters: "favoriteCharacters",
  rackets: "favoriteRackets",
};

function loadFavoriteSet(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((v) => Number.isInteger(v) && v >= 0));
  } catch {
    return new Set();
  }
}

let favoriteCharacterIds = loadFavoriteSet(FAVORITE_STORAGE_KEYS.characters);
let favoriteRacketIds = loadFavoriteSet(FAVORITE_STORAGE_KEYS.rackets);

function saveFavoriteSet(key, valueSet) {
  localStorage.setItem(key, JSON.stringify([...valueSet]));
}

function isFavoriteCharacter(character) {
  const index = characterIndexMap.get(character);
  return Number.isInteger(index) && favoriteCharacterIds.has(index);
}

function isFavoriteRacket(racket) {
  const index = racketIndexMap.get(racket);
  return Number.isInteger(index) && favoriteRacketIds.has(index);
}

const sectionNavItems = Array.from(document.querySelectorAll(".js-section-nav a[data-target]"));
const sectionNavGroups = Array.from(document.querySelectorAll(".js-section-nav"));
const sectionNavSections = Array.from(
  new Set(
    sectionNavItems
      .map((item) => document.getElementById(item.dataset.target))
      .filter(Boolean)
  )
);

const characterIndexMap = new Map(characters.map((character, index) => [character, index]));
const tierTabButtons = Array.from(document.querySelectorAll(".tier-tab"));
const tierPanels = Array.from(document.querySelectorAll(".tier-panel"));
const characterTierBoard = document.getElementById("character-tier-board");
const characterTierPool = document.getElementById("character-tier-pool");
const racketTierBoard = document.getElementById("racket-tier-board");
const racketTierPool = document.getElementById("racket-tier-pool");
const tierRowModal = document.getElementById("tier-row-modal");
const tierRowModalClose = document.getElementById("tier-row-modal-close");
const tierRowLabelInput = document.getElementById("tier-row-label-input");
const tierRowColorInput = document.getElementById("tier-row-color-input");
const tierRowClearButton = document.getElementById("tier-row-clear");
const tierRowAddAboveButton = document.getElementById("tier-row-add-above");
const tierRowAddBelowButton = document.getElementById("tier-row-add-below");
const tierRowDeleteButton = document.getElementById("tier-row-delete");

function getTierDefaultRows(locale = currentLocale) {
  if (locale === "en") {
    return [
      { label: "A", color: "#f07575" },
      { label: "B", color: "#efb676" },
      { label: "C", color: "#ecd37a" },
      { label: "D", color: "#e2ea72" },
      { label: "E", color: "#aee56f" },
    ];
  }

  return [
    { label: "S", color: "#f07575" },
    { label: "A", color: "#efb676" },
    { label: "B", color: "#ecd37a" },
    { label: "C", color: "#e2ea72" },
    { label: "D", color: "#aee56f" },
  ];
}

const TIER_STORAGE_KEY = "tierBoardsV2";
let currentTierTab = "characters";
let rowModalState = null;

const tierRuleLabels = {
  characters: document.querySelector('[data-tier-rule-label="characters"]'),
  rackets: document.querySelector('[data-tier-rule-label="rackets"]'),
};
const tierMetaSelects = {
  characters: Array.from(document.querySelectorAll('[data-tier-meta][data-tier-type="characters"]')),
  rackets: Array.from(document.querySelectorAll('[data-tier-meta][data-tier-type="rackets"]')),
};

const tierShareStatus = {
  characters: document.querySelector('[data-tier-share-status="characters"]'),
  rackets: document.querySelector('[data-tier-share-status="rackets"]'),
};


function makeTierRow(label, color) {
  return {
    id: `row-${Math.random().toString(36).slice(2, 10)}`,
    label,
    color,
  };
}

function createTierMeta(kind = "global") {
  return {
    kind,
    courtType: "all",
    gameMode: "singles",
    items: "on",
  };
}

function createInitialTierBoard(itemCount, kind = "global") {
  const rows = getTierDefaultRows(currentLocale).map((row) => makeTierRow(row.label, row.color));
  return {
    id: `profile-${Math.random().toString(36).slice(2, 10)}`,
    rows,
    placements: Object.fromEntries(Array.from({ length: itemCount }, (_, index) => [String(index), null])),
    poolOrder: Array.from({ length: itemCount }, (_, index) => index),
    meta: createTierMeta(kind),
  };
}

function normalizeTierMeta(raw, fallbackKind = "conditional") {
  return {
    kind: raw?.kind === "global" ? "global" : fallbackKind,
    courtType: typeof raw?.courtType === "string" ? raw.courtType : "all",
    gameMode: raw?.gameMode === "singles" || raw?.gameMode === "doubles" ? raw.gameMode : "singles",
    items: raw?.items === "on" || raw?.items === "off" ? raw.items : "on",
  };
}

function normalizeSingleTierBoard(raw, itemCount, fallbackKind = "conditional") {
  const fallback = createInitialTierBoard(itemCount, fallbackKind);
  if (!raw || !Array.isArray(raw.rows) || typeof raw.placements !== "object") {
    return fallback;
  }

  const rows = raw.rows
    .filter((row) => row && typeof row.id === "string")
    .map((row) => ({
      id: row.id,
      label: typeof row.label === "string" && row.label.trim() ? row.label.trim().slice(0, 24) : "?",
      color: typeof row.color === "string" && row.color ? row.color : "#666666",
    }));

  if (!rows.length) {
    return fallback;
  }

  const rowIdSet = new Set(rows.map((row) => row.id));
  const placements = {};
  for (let index = 0; index < itemCount; index += 1) {
    const key = String(index);
    const rowId = raw.placements[key];
    placements[key] = rowIdSet.has(rowId) ? rowId : null;
  }

  const placed = new Set(Object.entries(placements).filter(([, rowId]) => rowId != null).map(([index]) => Number(index)));
  const rawPool = Array.isArray(raw.poolOrder) ? raw.poolOrder : [];
  const poolOrder = rawPool.filter((value) => Number.isInteger(value) && value >= 0 && value < itemCount && !placed.has(value));
  for (let index = 0; index < itemCount; index += 1) {
    if (placements[String(index)] == null && !poolOrder.includes(index)) {
      poolOrder.push(index);
    }
  }

  return {
    ...fallback,
    ...raw,
    rows,
    placements,
    poolOrder,
    id: typeof raw.id === "string" ? raw.id : fallback.id,
    meta: normalizeTierMeta(raw.meta, fallbackKind),
  };
}

function normalizeTierBoardCollection(raw, itemCount) {
  if (!raw || typeof raw !== "object") {
    return {
      profiles: [createInitialTierBoard(itemCount, "global")],
      activeProfileId: null,
    };
  }

  if (Array.isArray(raw.profiles)) {
    const profiles = raw.profiles.map((profile, index) => normalizeSingleTierBoard(profile, itemCount, index === 0 ? "global" : "conditional"));
    if (!profiles.length) profiles.push(createInitialTierBoard(itemCount, "global"));
    const activeProfileId = profiles.some((profile) => profile.id === raw.activeProfileId) ? raw.activeProfileId : profiles[0].id;
    return { profiles, activeProfileId };
  }

  const legacy = normalizeSingleTierBoard(raw, itemCount, "global");
  return { profiles: [legacy], activeProfileId: legacy.id };
}

function loadTierBoards() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TIER_STORAGE_KEY) || "{}");
    const boards = {
      characters: normalizeTierBoardCollection(parsed.characters, characters.length),
      rackets: normalizeTierBoardCollection(parsed.rackets, rackets.length),
    };

    if (!boards.characters.activeProfileId) boards.characters.activeProfileId = boards.characters.profiles[0].id;
    if (!boards.rackets.activeProfileId) boards.rackets.activeProfileId = boards.rackets.profiles[0].id;
    return boards;
  } catch {
    return {
      characters: { profiles: [createInitialTierBoard(characters.length, "global")], activeProfileId: null },
      rackets: { profiles: [createInitialTierBoard(rackets.length, "global")], activeProfileId: null },
    };
  }
}

const tierBoards = loadTierBoards();
if (!tierBoards.characters.activeProfileId) tierBoards.characters.activeProfileId = tierBoards.characters.profiles[0].id;
if (!tierBoards.rackets.activeProfileId) tierBoards.rackets.activeProfileId = tierBoards.rackets.profiles[0].id;

function showTierShareStatus(boardKey, messageKey) {
  const el = tierShareStatus[boardKey];
  if (!el) return;
  el.textContent = t(messageKey);
  window.clearTimeout(el._clearTimerId);
  el._clearTimerId = window.setTimeout(() => {
    el.textContent = "";
  }, 2400);
}

function getTierShareText(boardKey) {
  const title = boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard");
  const profile = getActiveTierProfile(boardKey);
  return `#マリオテニスフィーバー ${title} | ${getProfileMetaLabel(profile.meta)}`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function buildTierBoardCanvas(boardKey) {
  const profile = getActiveTierProfile(boardKey);
  if (!profile) throw new Error("profile not found");

  const labelWidth = 90;
  const iconSize = 42;
  const gap = 6;
  const rowMinHeight = 56;
  const maxColumns = 8;
  const boardWidth = 860;
  const contentWidth = boardWidth - labelWidth - 24;

  const rows = profile.rows.map((row) => {
    const itemIndexes = Object.entries(profile.placements)
      .filter(([, rowId]) => rowId === row.id)
      .map(([index]) => Number(index))
      .sort((a, b) => a - b);
    return { row, itemIndexes };
  });

  const rowHeights = rows.map(({ itemIndexes }) => {
    const lines = Math.max(1, Math.ceil(itemIndexes.length / maxColumns));
    return Math.max(rowMinHeight, lines * iconSize + (lines - 1) * gap + 14);
  });

  const poolLines = Math.max(1, Math.ceil(profile.poolOrder.length / maxColumns));
  const poolHeight = Math.max(rowMinHeight, poolLines * iconSize + (poolLines - 1) * gap + 14);
  const headerHeight = 88;
  const totalHeight = headerHeight + rowHeights.reduce((a, b) => a + b, 0) + poolHeight + 44;

  const canvas = document.createElement("canvas");
  canvas.width = boardWidth;
  canvas.height = totalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas context unavailable");

  ctx.fillStyle = "#061522";
  ctx.fillRect(0, 0, boardWidth, totalHeight);

  ctx.fillStyle = "#d8eaff";
  ctx.font = "bold 24px sans-serif";
  ctx.fillText(boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard"), 18, 34);
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "#9fc3df";
  ctx.fillText(getProfileMetaLabel(profile.meta), 18, 60);

  let y = headerHeight;
  for (let i = 0; i < rows.length; i += 1) {
    const { row, itemIndexes } = rows[i];
    const h = rowHeights[i];

    ctx.fillStyle = row.color;
    ctx.fillRect(12, y, labelWidth, h);
    ctx.fillStyle = getContrastingColor(row.color);
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(row.label, 22, y + 32);

    ctx.fillStyle = "#0b1f31";
    ctx.fillRect(12 + labelWidth, y, contentWidth, h);

    for (let idx = 0; idx < itemIndexes.length; idx += 1) {
      const itemIndex = itemIndexes[idx];
      const col = idx % maxColumns;
      const line = Math.floor(idx / maxColumns);
      const x = 12 + labelWidth + 10 + col * (iconSize + gap);
      const iy = y + 8 + line * (iconSize + gap);
      const item = getBoardItem(boardKey, itemIndex);
      try {
        const img = await loadImage(item.image);
        ctx.drawImage(img, x, iy, iconSize, iconSize);
      } catch {
        ctx.fillStyle = "#375c78";
        ctx.fillRect(x, iy, iconSize, iconSize);
      }
    }

    y += h;
  }

  ctx.fillStyle = "#9fc3df";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(t("tier.poolTitle"), 14, y + 20);
  ctx.fillStyle = "#0b1f31";
  ctx.fillRect(12, y + 26, boardWidth - 24, poolHeight);

  for (let idx = 0; idx < profile.poolOrder.length; idx += 1) {
    const itemIndex = profile.poolOrder[idx];
    const col = idx % maxColumns;
    const line = Math.floor(idx / maxColumns);
    const x = 22 + col * (iconSize + gap);
    const iy = y + 34 + line * (iconSize + gap);
    const item = getBoardItem(boardKey, itemIndex);
    try {
      const img = await loadImage(item.image);
      ctx.drawImage(img, x, iy, iconSize, iconSize);
    } catch {
      ctx.fillStyle = "#375c78";
      ctx.fillRect(x, iy, iconSize, iconSize);
    }
  }

  return canvas;
}

function downloadCanvasAsPng(canvas, filename) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
  link.click();
}

async function exportTierBoardAsImage(boardKey) {
  const canvas = await buildTierBoardCanvas(boardKey);
  downloadCanvasAsPng(canvas, `tier-${boardKey}-${Date.now()}.png`);
}

function saveTierBoards() {
  localStorage.setItem(TIER_STORAGE_KEY, JSON.stringify(tierBoards));
}

function getActiveTierProfile(boardKey) {
  const board = tierBoards[boardKey];
  return board.profiles.find((profile) => profile.id === board.activeProfileId) || board.profiles[0];
}

function getProfileMetaLabel(meta) {
  const courtLabel = meta.courtType === "all" ? t("common.any") : t(`tierValue.${meta.courtType}`);
  const modeLabel = t(`tierValue.${meta.gameMode}`);
  const itemLabels = { on: t("common.yes"), off: t("common.no") };
  return `${t("tier.itemRule")}: ${itemLabels[meta.items] ?? meta.items} / ${t("tier.gameMode")}: ${modeLabel} / ${t("tier.courtType")}: ${courtLabel}`;
}

function updateTierRuleLabel(boardKey) {
  const labelEl = tierRuleLabels[boardKey];
  const active = getActiveTierProfile(boardKey);
  if (!labelEl || !active) return;
  labelEl.textContent = getProfileMetaLabel(active.meta);
}

function getBoardItem(datasetKey, index) {
  return datasetKey === "characters" ? characters[index] : rackets[index];
}

function getBoardImageClass(datasetKey) {
  return datasetKey === "characters" ? "tier-item__image" : "tier-item__image tier-item__image--racket";
}

function getBoardName(datasetKey, item) {
  return datasetKey === "characters" ? localizeValue(item.name) : localizeValue(item.name);
}

const racketIndexMap = new Map(rackets.map((racket, index) => [racket, index]));


function createStatRow(label, value) {
  const row = document.createElement("div");
  row.className = "stat-row";

  const name = document.createElement("span");
  name.className = "stat-label";
  name.textContent = typeof label === "function" ? label() : label;

  const valueWrap = document.createElement("div");
  valueWrap.className = "stat-value";

  const bar = document.createElement("div");
  bar.className = "stat-bar";

  const fill = document.createElement("span");
  fill.className = "stat-fill";
  fill.dataset.statTier = String(getStatTier(value));
  fill.style.setProperty("--stat-width", `${(value / maxStatValue) * 100}%`);

  bar.append(fill);

  const numeric = document.createElement("span");
  numeric.className = "stat-number";
  numeric.textContent = value.toFixed(1);

  valueWrap.append(bar, numeric);
  row.append(name, valueWrap);

  return row;
}

function getSortedStatEntries(stats) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], currentLocale));
}

function renderStatRows(container, sortedEntries, count) {
  container.replaceChildren();
  sortedEntries.slice(0, count).forEach(([key, value]) => {
    container.append(createStatRow(statLabels[key], value));
  });
}

function getMobileDetailsStatEntries(stats) {
  return mobileDetailsStatOrder
    .filter((key) => key in stats)
    .map((key) => [key, stats[key]]);
}

function createAccordion(title, content) {
  const wrapper = document.createElement("div");
  wrapper.className = "accordion";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "accordion-toggle";
  button.setAttribute("aria-expanded", "false");
  button.textContent = title;

  const panel = document.createElement("div");
  panel.className = "accordion-panel";
  panel.hidden = true;
  if (content instanceof Node) {
    panel.append(content);
  } else {
    panel.textContent = content;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
  });

  wrapper.append(button, panel);
  return wrapper;
}

/**
 * グリッドコンテナの現在の列数を取得する
 * @param {Element} gridEl - .card-grid の要素
 * @returns {number}
 */
function getGridColumnCount(gridEl) {
  const style = getComputedStyle(gridEl);
  const cols = style.gridTemplateColumns;
  if (!cols) {
    return 1;
  }
  const count = cols.trim().split(/\s+/).length;
  return count >= 1 ? count : 1;
}

/**
 * 同一行にあるカードの、同じインデックスのアコーディオンをクリックしたカードの展開状態に同期する
 * @param {HTMLButtonElement} clickedToggle - クリックされた .accordion-toggle
 */
function syncSameRowAccordions(clickedToggle) {
  const card = clickedToggle.closest(".card");
  const grid = card?.parentElement;
  if (!card || !grid || !grid.classList.contains("card-grid")) {
    return;
  }

  const cards = Array.from(grid.children);
  const cardIndex = cards.indexOf(card);
  if (cardIndex === -1) {
    return;
  }

  const columns = getGridColumnCount(grid);
  const rowIndex = Math.floor(cardIndex / columns);

  const clickedAccordion = clickedToggle.closest(".accordion");
  const accordionsInCard = card.querySelectorAll(".accordion");
  const accordionIndex = Array.from(accordionsInCard).indexOf(clickedAccordion);
  if (accordionIndex === -1) {
    return;
  }

  const newExpanded = clickedToggle.getAttribute("aria-expanded") === "true";

  cards.forEach((otherCard, i) => {
    if (Math.floor(i / columns) !== rowIndex) {
      return;
    }
    const otherAccordions = otherCard.querySelectorAll(".accordion");
    const otherAccordion = otherAccordions[accordionIndex];
    if (!otherAccordion) {
      return;
    }
    const otherButton = otherAccordion.querySelector(".accordion-toggle");
    const otherPanel = otherAccordion.querySelector(".accordion-panel");
    if (otherButton && otherPanel) {
      otherButton.setAttribute("aria-expanded", String(newExpanded));
      otherPanel.hidden = !newExpanded;
      otherButton.dispatchEvent(
        new CustomEvent("accordion-sync-state", {
          detail: { expanded: newExpanded },
        })
      );
    }
  });
}

function isMobileView() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function createFavoriteButton(itemType, isFavorite, onToggle) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "favorite-toggle";
  button.setAttribute("aria-pressed", String(isFavorite));

  const updateState = (active) => {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    if (itemType === "character") {
      button.setAttribute("aria-label", active ? t("favorite.removeCharacter") : t("favorite.addCharacter"));
      button.title = active ? t("favorite.removeCharacter") : t("favorite.addCharacter");
    } else {
      button.setAttribute("aria-label", active ? t("favorite.removeRacket") : t("favorite.addRacket"));
      button.title = active ? t("favorite.removeRacket") : t("favorite.addRacket");
    }
  };

  updateState(isFavorite);

  button.addEventListener("click", () => {
    const next = !button.classList.contains("is-active");
    updateState(next);
    onToggle(next);
  });

  return button;
}

function createCharacterCard(character) {
  const card = document.createElement("article");
  card.className = "card";
  const characterIndex = characterIndexMap.get(character);
  if (characterIndex >= 0) {
    card.id = `character-card-${characterIndex + 1}`;
  }

  const mobileView = isMobileView();
  if (mobileView) {
    card.classList.add("card--compact");
  }

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3>${localizeValue(character.name)}</h3>
    <p class="badge">${t(`type.${rawValue(character.type)}`)}</p>
  `;

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = `${localizeValue(character.name)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";
  image.className = "card-image";

  const media = document.createElement("div");
  media.className = "card-media";
  const favoriteButton = createFavoriteButton("character", isFavoriteCharacter(character), (active) => {
    if (characterIndex == null) return;
    if (active) {
      favoriteCharacterIds.add(characterIndex);
    } else {
      favoriteCharacterIds.delete(characterIndex);
    }
    saveFavoriteSet(FAVORITE_STORAGE_KEYS.characters, favoriteCharacterIds);
    if (characterFavoriteFilter?.value === "favorites" && !active) {
      renderCharacters();
    }
  });

  media.append(image, favoriteButton);
  header.append(title, media);

  const stats = document.createElement("div");
  stats.className = "stats";
  Object.entries(character.stats).forEach(([key, value]) => {
    stats.append(createStatRow(statLabels[key], value));
  });

  if (mobileView) {
    const compactStats = document.createElement("div");
    compactStats.className = "stats stats--compact";
    const sortedStats = getSortedStatEntries(character.stats);
    const detailsStats = getMobileDetailsStatEntries(character.stats);
    renderStatRows(compactStats, sortedStats, 2);

    const special = createAccordion(t("accordion.special"), localizeValue(character.special));

    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(createAccordion(t("accordion.gameText"), localizeValue(character.text)));

    const details = createAccordion(t("accordion.details"), detailsBody);
    details.classList.add("accordion--details");
    const detailsButton = details.querySelector(".accordion-toggle");

    const renderCompactStatsByExpandedState = (isExpanded) => {
      renderStatRows(compactStats, isExpanded ? detailsStats : sortedStats, isExpanded ? 4 : 2);
    };

    if (detailsButton) {
      detailsButton.addEventListener("click", () => {
        const isExpanded = detailsButton.getAttribute("aria-expanded") === "true";
        renderCompactStatsByExpandedState(isExpanded);
      });

      detailsButton.addEventListener("accordion-sync-state", (event) => {
        const isExpanded = event.detail?.expanded === true;
        renderCompactStatsByExpandedState(isExpanded);
      });
    }

    card.append(header, compactStats, special, details);
    return card;
  }

  const special = createAccordion(t("accordion.special"), localizeValue(character.special));
  const text = createAccordion(t("accordion.gameText"), localizeValue(character.text));
  card.append(header, stats, special, text);
  return card;
}

function createRacketCard(racket) {
  const card = document.createElement("article");
  card.className = "card";
  const racketIndex = racketIndexMap.get(racket);
  if (racketIndex >= 0) {
    card.id = `racket-card-${racketIndex + 1}`;
  }

  const mobileView = isMobileView();
  if (mobileView) {
    card.classList.add("card--compact");
  }

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3 class="racket-title">${localizeValue(racket.name)}</h3>
    <div class="badge-group badge-group--racket">
      <span class="badge">${t(`category.${rawValue(racket.category)}`)}</span>
      <span class="badge badge--soft">${t(`timing.${rawValue(racket.timing)}`)}</span>
    </div>
  `;

  const image = document.createElement("img");
  image.src = racket.image;
  image.alt = `${localizeValue(racket.name)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";
  image.decoding = "async";
  image.className = "card-image card-image--racket";
  image.onerror = () => {
    image.src = "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="240" height="240" rx="24" fill="#2a3544"/><text x="120" y="130" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#8899aa">No Image</text></svg>'
    );
    image.onerror = null;
  };

  const media = document.createElement("div");
  media.className = "card-media";
  const favoriteButton = createFavoriteButton("racket", isFavoriteRacket(racket), (active) => {
    if (racketIndex == null) return;
    if (active) {
      favoriteRacketIds.add(racketIndex);
    } else {
      favoriteRacketIds.delete(racketIndex);
    }
    saveFavoriteSet(FAVORITE_STORAGE_KEYS.rackets, favoriteRacketIds);
    if (racketFavoriteFilter?.value === "favorites" && !active) {
      renderRackets();
    }
  });

  media.append(image, favoriteButton);
  header.append(title, media);

  const effect = document.createElement("p");
  effect.className = "effect";
  effect.textContent = localizeValue(racket.effect);

  const text = createAccordion(t("accordion.gameText"), localizeValue(racket.text));
  const video = createRacketVideoAccordion(racket);

  if (mobileView) {
    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(effect, text, video);

    const details = createAccordion(t("accordion.details"), detailsBody);
    details.classList.add("accordion--details");
    card.append(header, details);
    return card;
  }

  card.append(header, effect, text, video);
  return card;
}

function createRacketVideoAccordion(racket) {
  const videoData = getRacketVideoData(racket);
  const content = createRacketVideoContent(videoData);
  const accordion = createAccordion(t("accordion.video"), content);

  if (videoData?.src && videoData.type !== "youtube") {
    const toggle = accordion.querySelector(".accordion-toggle");
    const panel = accordion.querySelector(".accordion-panel");
    const initializeOnExpand = () => {
      if (Boolean(panel?.hidden)) {
        initializeRacketVideoContent(content, videoData);
      }
    };

    toggle?.addEventListener("click", initializeOnExpand, { capture: true });
    toggle?.addEventListener("accordion-sync-state", (event) => {
      if (event?.detail?.expanded) {
        initializeRacketVideoContent(content, videoData);
      }
    });
  }

  return accordion;
}

const checkedVideoSourceCache = new Map();

function getRacketVideoData(racket) {
  if (racket.video?.src) {
    return racket.video;
  }

  const fallbackSrc = buildRacketMoviePath(racket.image);
  if (!fallbackSrc) {
    return null;
  }

  return {
    src: fallbackSrc,
    mime: "video/mp4",
  };
}

function buildRacketMoviePath(imagePath) {
  if (!imagePath) {
    return "";
  }

  const fileName = imagePath.split("/").pop() || "";
  const movieBaseName = fileName.replace(/_racket\.[a-zA-Z0-9]+$/, "");
  if (!movieBaseName) {
    return "";
  }

  return `assets/racket_movies/${movieBaseName}.mp4`;
}

async function doesVideoSourceExist(src) {
  if (!src) {
    return false;
  }

  if (checkedVideoSourceCache.has(src)) {
    return checkedVideoSourceCache.get(src);
  }

  const existsPromise = fetch(src, { method: "HEAD" })
    .then((response) => response.ok)
    .catch(() => false);

  checkedVideoSourceCache.set(src, existsPromise);
  return existsPromise;
}

function createUnavailableVideoMessage() {
  const unavailable = document.createElement("p");
  unavailable.className = "racket-video__unavailable";
  unavailable.textContent = t("video.unavailable");
  return unavailable;
}

function createRacketVideoContent(videoData) {
  const wrapper = document.createElement("div");
  wrapper.className = "racket-video";

  if (!videoData?.src) {
    wrapper.dataset.videoState = "unavailable";
    wrapper.append(createUnavailableVideoMessage());
    return wrapper;
  }

  if (videoData.type === "youtube") {
    const link = document.createElement("a");
    link.className = "racket-video__link";
    link.href = videoData.src;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t("video.openYoutube");
    wrapper.dataset.videoState = "ready";
    wrapper.append(link);
    return wrapper;
  }

  wrapper.dataset.videoState = "idle";
  return wrapper;
}

function initializeRacketVideoContent(wrapper, videoData) {
  const state = wrapper.dataset.videoState;
  if (state === "loading" || state === "ready" || state === "unavailable") {
    return;
  }

  wrapper.dataset.videoState = "loading";

  const checking = document.createElement("p");
  checking.className = "racket-video__unavailable";
  checking.textContent = t("video.checking");
  wrapper.replaceChildren(checking);

  void doesVideoSourceExist(videoData.src).then((exists) => {
    wrapper.replaceChildren();
    if (!exists) {
      wrapper.dataset.videoState = "unavailable";
      wrapper.append(createUnavailableVideoMessage());
      return;
    }

    const video = document.createElement("video");
    video.className = "racket-video__player";
    video.controls = true;
    video.muted = true;
    video.preload = "none";
    if (videoData.poster) {
      video.poster = videoData.poster;
    }

    const source = document.createElement("source");
    source.src = videoData.src;
    source.type = videoData.mime || "video/mp4";
    video.append(source);

    wrapper.dataset.videoState = "ready";
    wrapper.append(video);
  });
}

function sortItems(items, key, order) {
  if (order === "game" && key === "name") {
    return [...items];
  }

  const sorted = [...items];
  sorted.sort((a, b) => {
    if (key === "name") {
      return order === "asc"
        ? localizeValue(a.name).localeCompare(localizeValue(b.name), currentLocale)
        : localizeValue(b.name).localeCompare(localizeValue(a.name), currentLocale);
    }

    return order === "asc" ? b.stats[key] - a.stats[key] : a.stats[key] - b.stats[key];
  });
  return sorted;
}

function syncCharacterOrderAvailability() {
  const isNameSort = characterSort.value === "name";
  const gameOrderOptions = Array.from(document.querySelectorAll('#character-order option[value="game"]'));
  const ascOptions = Array.from(document.querySelectorAll('#character-order option[value="asc"]'));
  const descOptions = Array.from(document.querySelectorAll('#character-order option[value="desc"]'));

  gameOrderOptions.forEach((option) => {
    option.hidden = !isNameSort;
    option.disabled = !isNameSort;
  });

  ascOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.asc") : t("order.high");
  });

  descOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.desc") : t("order.low");
  });

  if (!isNameSort && characterOrder.value === "game") {
    characterOrder.value = "asc";
  }
}

function handleCharacterSortChange() {
  const isNameSort = characterSort.value === "name";
  if (isNameSort) {
    characterOrder.value = "game";
  }

  renderCharacters();
}

function updateApplyButtonCount(buttonId, count) {
  const applyButton = document.getElementById(buttonId);
  if (applyButton) {
    applyButton.textContent = t("common.showCount", { count });
  }
}

function normalizeKana(value) {
  return value
    .toLowerCase()
    .replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function getFilteredCharacters() {
  const typeValue = characterTypeFilter.value;
  const searchValue = normalizeKana(characterSearch.value.trim());
  const specialValue = characterSpecialFilter.value;
  const favoriteValue = characterFavoriteFilter?.value || "all";

  let filtered = characters;
  if (typeValue !== "all") {
    filtered = filtered.filter((character) => rawValue(character.type) === typeValue);
  }
  if (searchValue) {
    filtered = filtered.filter((character) => normalizeKana(localizeValue(character.name)).includes(searchValue));
  }
  if (specialValue === "yes") {
    filtered = filtered.filter((character) => rawValue(character.special) !== "なし");
  }
  if (specialValue === "no") {
    filtered = filtered.filter((character) => rawValue(character.special) === "なし");
  }
  if (favoriteValue === "favorites") {
    filtered = filtered.filter((character) => isFavoriteCharacter(character));
  }

  return filtered;
}

function updateCharacterActiveFilterChips() {
  characterActiveFilters.innerHTML = "";
  const chips = [];

  if (characterTypeFilter.value !== "all") {
    chips.push({ key: "type", label: `${t("chip.type")}: ${t(`type.${characterTypeFilter.value}`)}` });
  }
  if (characterSearch.value.trim()) {
    chips.push({ key: "search", label: `${t("chip.search")}: ${characterSearch.value.trim()}` });
  }
  if (characterSpecialFilter.value === "yes") {
    chips.push({ key: "special", label: `${t("chip.special")}: ${t("chip.yes")}` });
  }
  if (characterSpecialFilter.value === "no") {
    chips.push({ key: "special", label: `${t("chip.special")}: ${t("chip.no")}` });
  }
  if (characterFavoriteFilter?.value === "favorites") {
    chips.push({ key: "favorite", label: `${t("chip.favorites")}: ${t("filter.favoritesOnly")}` });
  }
  if (characterSort.value !== "name") {
    chips.push({ key: "sort", label: `${t("chip.sort")}: ${(characterSortLabels[characterSort.value]?.() ?? characterSort.value)}` });
  }
  if (characterOrder.value === "asc") {
    chips.push({
      key: "order",
      label: `${t("chip.order")}: ${characterSort.value === "name" ? t("order.asc") : t("order.high")}`,
    });
  }
  if (characterOrder.value === "desc") {
    chips.push({
      key: "order",
      label: `${t("chip.order")}: ${characterSort.value === "name" ? t("order.desc") : t("order.low")}`,
    });
  }

  chips.forEach((chip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.filterKey = chip.key;
    button.textContent = `${chip.label} ×`;
    characterActiveFilters.append(button);
  });
}

function closeCharacterFilterModal() {
  const modal = document.getElementById("character-filter-modal");
  if (!modal || !modal.classList.contains("is-open")) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateRacketActiveFilterChips() {
  racketActiveFilters.innerHTML = "";
  const chips = [];

  if (racketTypeFilter.value !== "all") {
    chips.push({ key: "type", label: `${t("chip.category")}: ${t(`category.${racketTypeFilter.value}`)}` });
  }
  if (racketSearch.value.trim()) {
    chips.push({ key: "search", label: `${t("chip.search")}: ${racketSearch.value.trim()}` });
  }
  if (racketTimingFilter.value !== "all") {
    chips.push({ key: "timing", label: `${t("chip.timing")}: ${t(`timing.${racketTimingFilter.value}`)}` });
  }
  if (racketFavoriteFilter?.value === "favorites") {
    chips.push({ key: "favorite", label: `${t("chip.favorites")}: ${t("filter.favoritesOnly")}` });
  }
  if (racketOrder.value === "asc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${t("order.asc")}` });
  }
  if (racketOrder.value === "desc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${t("order.desc")}` });
  }

  chips.forEach((chip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.filterKey = chip.key;
    button.textContent = `${chip.label} ×`;
    racketActiveFilters.append(button);
  });
}

function createRacketSearchShortcut(racket) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-shortcut";

  const racketIndex = racketIndexMap.get(racket);
  if (racketIndex >= 0) {
    button.dataset.targetCardId = `racket-card-${racketIndex + 1}`;
  }

  const icon = document.createElement("img");
  icon.className = "search-shortcut__icon search-shortcut__icon--racket";
  icon.src = racket.image;
  icon.alt = "";
  icon.loading = "lazy";
  icon.decoding = "async";
  icon.onerror = () => {
    icon.src = "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#2a3544"/><text x="32" y="36" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#8899aa">No Img</text></svg>'
    );
    icon.onerror = null;
  };

  const name = document.createElement("span");
  name.className = "search-shortcut__name";
  name.textContent = localizeValue(racket.name);

  button.append(icon, name);
  return button;
}

function renderRacketSearchShortcuts(filteredRackets) {
  const searchValue = racketSearch.value.trim();
  const containers = [racketSearchResults, racketModalSearchResults].filter(Boolean);

  containers.forEach((container) => {
    container.innerHTML = "";

    if (!searchValue) {
      container.hidden = true;
      return;
    }

    const label = document.createElement("p");
    label.className = "search-shortcuts__title";
    label.textContent = t("common.searchHit", { count: filteredRackets.length });

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredRackets.forEach((racket) => {
      list.append(createRacketSearchShortcut(racket));
    });

    if (!filteredRackets.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = t("common.noRacket");
      container.append(label, empty);
    } else {
      container.append(label, list);
    }

    container.hidden = false;
  });
}

function createCharacterSearchShortcut(character) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-shortcut";

  const characterIndex = characterIndexMap.get(character);
  if (characterIndex >= 0) {
    button.dataset.targetCardId = `character-card-${characterIndex + 1}`;
  }

  const icon = document.createElement("img");
  icon.className = "search-shortcut__icon";
  icon.src = character.image;
  icon.alt = "";
  icon.loading = "lazy";

  const name = document.createElement("span");
  name.className = "search-shortcut__name";
  name.textContent = localizeValue(character.name);

  button.append(icon, name);
  return button;
}

function renderCharacterSearchShortcuts(filteredCharacters) {
  const searchValue = characterSearch.value.trim();
  const containers = [characterSearchResults, characterModalSearchResults].filter(Boolean);

  containers.forEach((container) => {
    container.innerHTML = "";

    if (!searchValue) {
      container.hidden = true;
      return;
    }

    const label = document.createElement("p");
    label.className = "search-shortcuts__title";
    label.textContent = t("common.searchHit", { count: filteredCharacters.length });

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredCharacters.forEach((character) => {
      list.append(createCharacterSearchShortcut(character));
    });

    if (!filteredCharacters.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = t("common.noCharacter");
      container.append(label, empty);
    } else {
      container.append(label, list);
    }

    container.hidden = false;
  });
}

function setupRacketSearchShortcutActions() {
  const onClick = (event) => {
    const shortcut = event.target.closest(".search-shortcut");
    if (!shortcut) {
      return;
    }

    const cardId = shortcut.dataset.targetCardId;
    if (!cardId) {
      return;
    }

    const modal = document.getElementById("racket-filter-modal");
    if (modal?.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    const targetCard = document.getElementById(cardId);
    if (!targetCard) {
      return;
    }

    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  racketSearchResults?.addEventListener("click", onClick);
  racketModalSearchResults?.addEventListener("click", onClick);
}

function setupCharacterSearchShortcutActions() {
  const onClick = (event) => {
    const shortcut = event.target.closest(".search-shortcut");
    if (!shortcut) {
      return;
    }

    const cardId = shortcut.dataset.targetCardId;
    if (!cardId) {
      return;
    }

    closeCharacterFilterModal();

    const targetCard = document.getElementById(cardId);
    if (!targetCard) {
      return;
    }

    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  characterSearchResults?.addEventListener("click", onClick);
  characterModalSearchResults?.addEventListener("click", onClick);
}

function renderCharacters() {
  syncCharacterOrderAvailability();

  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;
  const filteredCharacters = getFilteredCharacters();
  const sorted = sortItems(filteredCharacters, sortKey, orderValue);

  const fragment = document.createDocumentFragment();
  sorted.forEach((character) => fragment.append(createCharacterCard(character)));
  characterList.replaceChildren(fragment);

  characterCount.textContent = t("common.count", { count: sorted.length });
  updateApplyButtonCount("character-filter-apply", sorted.length);

  updateCharacterActiveFilterChips();
  renderCharacterSearchShortcuts(sorted);
}

function getFilteredRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;
  const searchValue = normalizeKana(racketSearch.value.trim());
  const favoriteValue = racketFavoriteFilter?.value || "all";

  let filtered = rackets;
  if (typeValue !== "all") {
    filtered = filtered.filter((racket) => rawValue(racket.category) === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => rawValue(racket.timing) === timingValue);
  }
  if (searchValue) {
    filtered = filtered.filter((racket) => normalizeKana(localizeValue(racket.name)).includes(searchValue));
  }
  if (favoriteValue === "favorites") {
    filtered = filtered.filter((racket) => isFavoriteRacket(racket));
  }

  return filtered;
}

function renderRackets() {
  const filteredRackets = getFilteredRackets();
  const sorted = sortItems(filteredRackets, "name", racketOrder.value);

  const fragment = document.createDocumentFragment();
  sorted.forEach((racket) => fragment.append(createRacketCard(racket)));
  racketList.replaceChildren(fragment);

  racketCount.textContent = t("common.count", { count: sorted.length });
  updateApplyButtonCount("racket-filter-apply", sorted.length);
  updateRacketActiveFilterChips();
  renderRacketSearchShortcuts(sorted);
}

function setupRacketFilterChips() {
  racketActiveFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".active-filter-chip");
    if (!button) {
      return;
    }

    switch (button.dataset.filterKey) {
      case "type":
        racketTypeFilter.value = "all";
        break;
      case "search":
        racketSearch.value = "";
        break;
      case "timing":
        racketTimingFilter.value = "all";
        break;
      case "favorite":
        if (racketFavoriteFilter) racketFavoriteFilter.value = "all";
        break;
      case "order":
        racketOrder.value = "game";
        break;
      default:
        break;
    }

    renderRackets();
  });
}

function setupCharacterFilterChips() {
  characterActiveFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".active-filter-chip");
    if (!button) {
      return;
    }

    switch (button.dataset.filterKey) {
      case "type":
        characterTypeFilter.value = "all";
        break;
      case "search":
        characterSearch.value = "";
        break;
      case "special":
        characterSpecialFilter.value = "all";
        break;
      case "favorite":
        if (characterFavoriteFilter) characterFavoriteFilter.value = "all";
        break;
      case "sort":
        characterSort.value = "name";
        break;
      case "order":
        characterOrder.value = "game";
        break;
      default:
        break;
    }

    renderCharacters();
  });
}

function setupFilterModal(modalId, inlineFilterId, modalFilterId, applyButtonId, onApply) {
  const modal = document.getElementById(modalId);
  const inlineFilters = document.getElementById(inlineFilterId);
  const modalFilters = document.getElementById(modalFilterId);
  const applyButton = document.getElementById(applyButtonId);

  if (!modal || !inlineFilters || !modalFilters || !applyButton) {
    return;
  }

  modalFilters.innerHTML = "";
  modalFilters.append(...Array.from(inlineFilters.children).map((node) => node.cloneNode(true)));

  const modalSearchResults =
    modalId === "character-filter-modal"
      ? characterModalSearchResults
      : modalId === "racket-filter-modal"
        ? racketModalSearchResults
        : null;

  if (modalSearchResults) {
    const searchInput = modalFilters.querySelector('input[type="search"]');
    const searchFilter = searchInput?.closest(".filter");
    if (searchFilter) {
      searchFilter.insertAdjacentElement("afterend", modalSearchResults);
      modalSearchResults.classList.add("search-shortcuts--near-search");
    }
  }

  const sourceControls = Array.from(inlineFilters.querySelectorAll("select,input"));
  const modalControls = Array.from(modalFilters.querySelectorAll("select,input"));
  const modalControlById = new Map(modalControls.map((control) => [control.id, control]));

  sourceControls.forEach((sourceControl) => {
    const targetControl = modalControlById.get(sourceControl.id);
    if (!targetControl) {
      return;
    }

    const sync = () => {
      sourceControl.value = targetControl.value;
      onApply();
    };

    targetControl.addEventListener("change", sync);
    targetControl.addEventListener("input", sync);
  });

  const openButtons = Array.from(document.querySelectorAll(`[data-modal-target="${modalId}"]`));
  const closeButtons = Array.from(document.querySelectorAll(`[data-modal-close="${modalId}"]`));

  const syncModalWithSource = () => {
    sourceControls.forEach((sourceControl) => {
      const targetControl = modalControlById.get(sourceControl.id);
      if (targetControl) {
        targetControl.value = sourceControl.value;
      }
    });
  };

  const openModal = () => {
    syncModalWithSource();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  applyButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function setupChangelogModal() {
  const modalId = "changelog-modal";
  const modal = document.getElementById(modalId);
  const content = document.getElementById("changelog-content");

  if (!modal || !content) {
    return;
  }

  renderChangelogContent(content);

  const openButtons = Array.from(document.querySelectorAll(`[data-modal-target="${modalId}"]`));
  const closeButtons = Array.from(document.querySelectorAll(`[data-modal-close="${modalId}"]`));

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function renderChangelogContent(content) {
  content.innerHTML = "";
  changelog.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "changelog-entry";

    const dateEl = document.createElement("p");
    dateEl.className = "changelog-entry__date";
    dateEl.textContent = localizeValue(entry.date);

    const ul = document.createElement("ul");
    ul.className = "changelog-entry__items";
    entry.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = localizeValue(item);
      ul.append(li);
    });

    div.append(dateEl, ul);
    content.append(div);
  });
}


function setupSectionNavVisibility() {
  const nav = document.querySelector(".section-nav");
  const charactersSection = document.getElementById("characters");

  if (!nav || !charactersSection) {
    return;
  }

  const desktopMedia = window.matchMedia("(min-width: 769px)");

  const updateVisibility = () => {
    if (!desktopMedia.matches) {
      nav.classList.remove("is-visible");
      return;
    }

    const triggerOffset = 120;
    const shouldShow = charactersSection.getBoundingClientRect().top <= triggerOffset;
    nav.classList.toggle("is-visible", shouldShow);
  };

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
}

function setupSectionNavToggle() {
  const toggle = document.querySelector("[data-section-nav-toggle]");
  const links = document.getElementById("desktop-section-nav-links");

  if (!toggle || !links) {
    return;
  }

  const updateCollapsedState = (isExpanded) => {
    toggle.setAttribute("aria-expanded", String(isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? t("aria.collapseNav") : t("aria.expandNav"));
    links.classList.toggle("is-collapsed", !isExpanded);
  };

  updateCollapsedState(toggle.getAttribute("aria-expanded") !== "false");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    updateCollapsedState(!isExpanded);
  });
}

function activateSectionNav(sectionId) {
  sectionNavItems.forEach((item) => {
    const isActive = item.dataset.target === sectionId;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setupSectionNav() {
  if (!sectionNavItems.length || !sectionNavSections.length) {
    return;
  }

  sectionNavGroups.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-target]");
      if (!link || !nav.contains(link)) {
        return;
      }

      event.preventDefault();
      const targetId = link.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${targetId}`);
      activateSectionNav(targetId);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length) {
        activateSectionNav(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.55],
    }
  );

  sectionNavSections.forEach((section) => observer.observe(section));

  const initialId = window.location.hash?.replace("#", "");
  activateSectionNav(initialId || sectionNavSections[0].id);
}


/**
 * カードグリッド内のアコーディオンを、同一行のカードで展開状態が同期するように委譲リスナーを設定する
 */
function setupAccordionRowSync() {
  const handleAccordionClick = (event) => {
    const toggle = event.target.closest(".accordion-toggle");
    if (!toggle) {
      return;
    }
    syncSameRowAccordions(toggle);
  };

  characterList.addEventListener("click", handleAccordionClick);
  racketList.addEventListener("click", handleAccordionClick);
}

function setupSectionCollapse() {
  const toggles = Array.from(document.querySelectorAll(".section-title-toggle"));

  toggles.forEach((toggle) => {
    const targetId = toggle.dataset.collapseTarget;
    const content = document.getElementById(targetId);

    if (!content) {
      return;
    }

    const updateState = (isExpanded) => {
      toggle.setAttribute("aria-expanded", String(isExpanded));
      content.hidden = !isExpanded;
    };

    updateState(toggle.getAttribute("aria-expanded") !== "false");

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      updateState(!isExpanded);
    });
  });
}


function moveTierItem(boardKey, itemIndex, targetRowId) {
  const board = getActiveTierProfile(boardKey);
  board.placements[String(itemIndex)] = targetRowId;
  board.poolOrder = board.poolOrder.filter((value) => value !== itemIndex);

  if (targetRowId == null && !board.poolOrder.includes(itemIndex)) {
    board.poolOrder.push(itemIndex);
  }

  saveTierBoards();
  renderTierBoard(boardKey);
}

function createTierItem(boardKey, itemIndex) {
  const item = getBoardItem(boardKey, itemIndex);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tier-item";
  button.draggable = true;
  button.dataset.itemIndex = String(itemIndex);
  button.dataset.boardKey = boardKey;
  button.setAttribute("aria-label", getBoardName(boardKey, item));

  const image = document.createElement("img");
  image.className = getBoardImageClass(boardKey);
  image.src = item.image;
  image.alt = `${getBoardName(boardKey, item)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";

  button.append(image);

  button.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", JSON.stringify({ boardKey, itemIndex }));
  });

  button.addEventListener("click", () => {
    const board = getActiveTierProfile(boardKey);
    const rowId = board.placements[String(itemIndex)];
    if (rowId) {
      moveTierItem(boardKey, itemIndex, null);
      return;
    }

    moveTierItem(boardKey, itemIndex, board.rows[0]?.id ?? null);
  });

  return button;
}

function setupDropZone(zone, boardKey, rowId) {
  const zoneKey = `${boardKey}:${rowId ?? "pool"}`;
  if (zone.dataset.dropZoneBound === zoneKey) {
    return;
  }
  zone.dataset.dropZoneBound = zoneKey;

  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("is-dragover");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("is-dragover");
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("is-dragover");
    const data = event.dataTransfer?.getData("text/plain");
    if (!data) return;
    try {
      const parsed = JSON.parse(data);
      if (parsed.boardKey !== boardKey || !Number.isInteger(parsed.itemIndex)) return;
      moveTierItem(boardKey, parsed.itemIndex, rowId);
    } catch {
      // noop
    }
  });
}

function getContrastingColor(hex) {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#102235" : "#f5fbff";
}

function openTierRowModal(boardKey, rowId) {
  const board = getActiveTierProfile(boardKey);
  const rowIndex = board.rows.findIndex((row) => row.id === rowId);
  if (rowIndex === -1 || !tierRowModal) return;

  rowModalState = { boardKey, rowId, rowIndex };
  const row = board.rows[rowIndex];
  tierRowLabelInput.value = row.label;
  tierRowColorInput.value = row.color;
  tierRowModal.classList.add("is-open");
  tierRowModal.setAttribute("aria-hidden", "false");
}

function closeTierRowModal() {
  if (!tierRowModal) return;
  tierRowModal.classList.remove("is-open");
  tierRowModal.setAttribute("aria-hidden", "true");
  rowModalState = null;
}

function syncTierMetaSelects(boardKey) {
  const active = getActiveTierProfile(boardKey);
  if (!active) return;
  tierMetaSelects[boardKey].forEach((select) => {
    const key = select.dataset.tierMeta;
    if (!key) return;
    select.value = active.meta[key] ?? "all";
  });
}

function renderTierBoard(boardKey) {
  const board = getActiveTierProfile(boardKey);
  const boardEl = boardKey === "characters" ? characterTierBoard : racketTierBoard;
  const poolEl = boardKey === "characters" ? characterTierPool : racketTierPool;
  if (!boardEl || !poolEl || !board) return;
  syncTierMetaSelects(boardKey);
  updateTierRuleLabel(boardKey);

  const boardFrag = document.createDocumentFragment();
  board.rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = "tier-row";

    const label = document.createElement("div");
    label.className = "tier-row__label";
    label.style.backgroundColor = row.color;
    label.style.color = getContrastingColor(row.color);
    label.textContent = row.label;

    const items = document.createElement("div");
    items.className = "tier-row__items";
    setupDropZone(items, boardKey, row.id);

    Object.entries(board.placements)
      .filter(([, targetRowId]) => targetRowId === row.id)
      .map(([itemIndex]) => Number(itemIndex))
      .sort((a, b) => a - b)
      .forEach((itemIndex) => items.append(createTierItem(boardKey, itemIndex)));

    const controls = document.createElement("div");
    controls.className = "tier-row__controls";

    const settings = document.createElement("button");
    settings.type = "button";
    settings.className = "tier-row__btn";
    settings.textContent = "⚙";
    settings.addEventListener("click", () => openTierRowModal(boardKey, row.id));

    const up = document.createElement("button");
    up.type = "button";
    up.className = "tier-row__btn";
    up.textContent = "⌃";
    up.disabled = rowIndex === 0;
    up.addEventListener("click", () => {
      if (rowIndex === 0) return;
      [board.rows[rowIndex - 1], board.rows[rowIndex]] = [board.rows[rowIndex], board.rows[rowIndex - 1]];
      saveTierBoards();
      renderTierBoard(boardKey);
    });

    const down = document.createElement("button");
    down.type = "button";
    down.className = "tier-row__btn";
    down.textContent = "⌄";
    down.disabled = rowIndex === board.rows.length - 1;
    down.addEventListener("click", () => {
      if (rowIndex >= board.rows.length - 1) return;
      [board.rows[rowIndex + 1], board.rows[rowIndex]] = [board.rows[rowIndex], board.rows[rowIndex + 1]];
      saveTierBoards();
      renderTierBoard(boardKey);
    });

    controls.append(settings, up, down);
    rowEl.append(label, items, controls);
    boardFrag.append(rowEl);
  });

  const addRow = document.createElement("button");
  addRow.type = "button";
  addRow.className = "tier-add-row";
  addRow.textContent = `+ ${t("tier.addItem")}`;
  addRow.addEventListener("click", () => {
    board.rows.push(makeTierRow(String.fromCharCode(65 + board.rows.length), "#7aa6ff"));
    saveTierBoards();
    renderTierBoard(boardKey);
  });
  boardFrag.append(addRow);

  boardEl.replaceChildren(boardFrag);

  const poolFrag = document.createDocumentFragment();
  setupDropZone(poolEl, boardKey, null);
  board.poolOrder.forEach((itemIndex) => {
    poolFrag.append(createTierItem(boardKey, itemIndex));
  });
  poolEl.replaceChildren(poolFrag);
}

function setupTierRuleManagers() {
  Object.entries(tierMetaSelects).forEach(([boardKey, selects]) => {
    selects.forEach((select) => {
      select.addEventListener("change", () => {
        const active = getActiveTierProfile(boardKey);
        if (!active) return;
        const key = select.dataset.tierMeta;
        if (!key) return;
        active.meta[key] = select.value;
        saveTierBoards();
        renderTierBoard(boardKey);
      });
    });
  });
}

function setupTierTabs() {
  tierTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentTierTab = button.dataset.tierTab || "characters";
      tierTabButtons.forEach((tab) => tab.classList.toggle("is-active", tab === button));
      tierPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tierPanel === currentTierTab));
    });
  });
}

function setupTierShareActions() {
  document.querySelectorAll("[data-tier-share-x]").forEach((button) => {
    button.addEventListener("click", async () => {
      const boardKey = button.dataset.tierShareX;
      if (boardKey !== "characters" && boardKey !== "rackets") return;

      try {
        const canvas = await buildTierBoardCanvas(boardKey);
        const text = getTierShareText(boardKey);

        if (navigator.share && navigator.canShare) {
          const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
          if (!blob) throw new Error("blob conversion failed");
          const file = new File([blob], `tier-${boardKey}.png`, { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              text,
              title: boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard"),
            });
            showTierShareStatus(boardKey, "tier.shareXOpened");
            return;
          }
        }

        downloadCanvasAsPng(canvas, `tier-${boardKey}-${Date.now()}.png`);
        const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(intent, "_blank", "noopener,noreferrer");
        showTierShareStatus(boardKey, "tier.shareXFallback");
      } catch {
        showTierShareStatus(boardKey, "tier.shareXFailed");
      }
    });
  });

  document.querySelectorAll("[data-tier-save-image]").forEach((button) => {
    button.addEventListener("click", async () => {
      const boardKey = button.dataset.tierSaveImage;
      if (boardKey !== "characters" && boardKey !== "rackets") return;

      try {
        await exportTierBoardAsImage(boardKey);
        showTierShareStatus(boardKey, "tier.imageSaved");
      } catch {
        showTierShareStatus(boardKey, "tier.imageSaveFailed");
      }
    });
  });
}

function setupTierModalActions() {
  if (!tierRowModal) return;

  tierRowModalClose?.addEventListener("click", closeTierRowModal);
  tierRowModal.addEventListener("click", (event) => {
    if (event.target === tierRowModal) closeTierRowModal();
  });

  tierRowLabelInput?.addEventListener("input", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const row = board.rows.find((target) => target.id === rowModalState.rowId);
    if (!row) return;
    row.label = tierRowLabelInput.value.slice(0, 24) || "?";
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  tierRowColorInput?.addEventListener("input", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const row = board.rows.find((target) => target.id === rowModalState.rowId);
    if (!row) return;
    row.color = tierRowColorInput.value;
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  tierRowClearButton?.addEventListener("click", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    Object.entries(board.placements).forEach(([itemIndex, rowId]) => {
      if (rowId === rowModalState.rowId) {
        board.placements[itemIndex] = null;
        const index = Number(itemIndex);
        if (!board.poolOrder.includes(index)) board.poolOrder.push(index);
      }
    });
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  const insertRow = (offset) => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const rowIndex = board.rows.findIndex((row) => row.id === rowModalState.rowId);
    if (rowIndex === -1) return;
    board.rows.splice(rowIndex + offset, 0, makeTierRow("New", "#90a4ae"));
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  };

  tierRowAddAboveButton?.addEventListener("click", () => insertRow(0));
  tierRowAddBelowButton?.addEventListener("click", () => insertRow(1));

  tierRowDeleteButton?.addEventListener("click", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    if (board.rows.length <= 1) return;
    board.rows = board.rows.filter((row) => row.id !== rowModalState.rowId);
    Object.entries(board.placements).forEach(([itemIndex, rowId]) => {
      if (rowId === rowModalState.rowId) {
        board.placements[itemIndex] = null;
        const index = Number(itemIndex);
        if (!board.poolOrder.includes(index)) board.poolOrder.push(index);
      }
    });
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
    closeTierRowModal();
  });
}

function renderAllTierBoards() {
  renderTierBoard("characters");
  renderTierBoard("rackets");
}



function applyStaticTranslations() {
  document.documentElement.lang = currentLocale;
  document.title = t("site.pageTitle");
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("site.pageDescription"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.dataset.i18nAttr?.split(",") ?? [];
    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":").map((part) => part?.trim());
      if (attr && key) {
        element.setAttribute(attr, t(key));
      }
    });
  });
}

function syncLocaleSelect() {
  if (localeSelect) {
    localeSelect.value = currentLocale;
  }
}

function applyLocale() {
  applyStaticTranslations();
  const changelogContent = document.getElementById("changelog-content");
  if (changelogContent) {
    renderChangelogContent(changelogContent);
  }
  syncCharacterOrderAvailability();
  renderCharacters();
  renderRackets();
  renderAllTierBoards();
}
function bindChangeListeners(elements, handler) {
  elements.forEach((element) => element.addEventListener("change", handler));
}

function debounce(callback, delay = 150) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

bindChangeListeners([characterTypeFilter, characterSpecialFilter, characterFavoriteFilter, characterOrder].filter(Boolean), renderCharacters);
bindChangeListeners([racketTypeFilter, racketTimingFilter, racketFavoriteFilter, racketOrder].filter(Boolean), renderRackets);
characterSort.addEventListener("change", handleCharacterSortChange);
characterSearch.addEventListener("input", debounce(renderCharacters));
racketSearch.addEventListener("input", debounce(renderRackets));


setupCharacterFilterChips();
setupRacketFilterChips();
setupCharacterSearchShortcutActions();
setupRacketSearchShortcutActions();
setupFilterModal("character-filter-modal", "character-inline-filters", "character-modal-filters", "character-filter-apply", renderCharacters);
setupFilterModal("racket-filter-modal", "racket-inline-filters", "racket-modal-filters", "racket-filter-apply", renderRackets);
setupChangelogModal();
setupTierTabs();
setupTierRuleManagers();
setupTierShareActions();
setupTierModalActions();

if (localeSelect) {
  localeSelect.addEventListener("change", (event) => {
    currentLocale = event.target.value === "en" ? "en" : "ja";
    localStorage.setItem("locale", currentLocale);
    applyLocale();
  });
}

syncLocaleSelect();
applyLocale();
setupSectionCollapse();
setupAccordionRowSync();
setupSectionNavVisibility();
setupSectionNavToggle();
setupSectionNav();
renderAllTierBoards();
