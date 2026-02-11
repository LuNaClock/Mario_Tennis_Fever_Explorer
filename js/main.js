import { characters, rackets, tips, changelog } from "../data.js";

const translations = {
  ja: {
    site: { pageTitle: "マリオテニスフィーバー データ参照サイト", pageDescription: "マリオテニスフィーバーのキャラクターやラケット、システム関連データを一覧で確認できる参照サイト。", title: "マリオテニスフィーバー Explorer", language: "Language", lead: "キャラクターやラケットの特徴などを確認できるデータまとめサイトです。フィルタ・ソートで目的の情報を整理しながら参照できます。" },
    nav: { characters: "キャラ", rackets: "ラケット", tier: "Tier" },
    section: { characters: { title: "キャラクター一覧", description: "タイプ別の特徴やパラメータを比較できます。" }, rackets: { title: "ラケット一覧", description: "効果やタイミングを比較できます。" }, tips: { description: "試合で役立つ操作のポイントを素早く確認できます。" }, tier: { title: "Tier表", description: "キャラとラケットを自分基準でランク付けできます。" } },
    filter: { searchAndFilter: "検索・絞り込み", search: "検索", type: "タイプ", special: "特殊能力", favoritesOnly: "お気に入りのみ", sortBy: "ソート項目", order: "並び順", category: "種類", timing: "効果タイミング", tipsCategory: "カテゴリ", verification: "検証" },
    modal: { characterFilter: "キャラクターの検索・絞り込み", racketFilter: "ラケットの検索・絞り込み" },
    placeholder: { characterSearch: "キャラクター名で検索", racketSearch: "ラケット名で検索" },
    footer: { note: "データは仮入力を含みます。後日更新予定です。", contactLabel: "作成者・問い合わせ先:", contactAccount: "@Lu_Na_Clock", changelog: "更新履歴" },
    stat: { speed: "スピード", power: "パワー", control: "コントロール", spin: "スピン" },
    sort: { name: "名前" },
    order: { game: "ゲーム内順", asc: "昇順", desc: "降順", high: "数値が高い順", low: "数値が低い順" },
    common: { any: "指定なし", yes: "あり", no: "なし", wip: "仮実装", count: "{{count}}件表示", showCount: "{{count}}件を表示", searchHit: "検索ヒット: {{count}}件", noCharacter: "一致するキャラクターが見つかりません。", noRacket: "一致するラケットが見つかりません。", noTip: "一致するTipsが見つかりません。", language: "言語" },
    accordion: { special: "特殊能力", gameText: "ゲーム内テキスト", details: "全項目を見る", video: "動画で効果を確認する" },
    video: { unavailable: "動画は準備中です。", checking: "動画の有無を確認中です…", openYoutube: "YouTubeで開く" },
    chip: { type: "タイプ", search: "検索", special: "特殊能力", favorites: "お気に入り", sort: "ソート", order: "並び順", category: "種類", timing: "効果タイミング", yes: "あり", no: "なし" },
    aria: { sectionNav: "セクションナビゲーション", mobileNav: "モバイルセクションナビ", close: "閉じる", showChangelog: "更新履歴を表示", collapseNav: "セクションナビをたたむ", expandNav: "セクションナビを表示", contactX: "Xアカウント @Lu_Na_Clock" },
    type: { "オールラウンド": "オールラウンド", "テクニック": "テクニック", "パワー": "パワー", "ディフェンス": "ディフェンス", "トリッキー": "トリッキー", "スピード": "スピード" },
    category: { "妨害": "妨害", "強化": "強化", "その他": "その他", "不明": "不明" },
    timing: { "即時": "即時", "バウンド時": "バウンド時", "不明": "不明" },
    tipsCategory: { "仕様": "仕様", "実践知識": "実践知識" },
    verification: { "検証中": "検証中", "検証済": "検証済" },
    tierValue: { hard: "ハード", clay: "クレー", grass: "グラス", singles: "シングルス", doubles: "ダブルス", fever: "フィーバー" },
    meta: { iconSuffix: "のアイコン" },
    changelog: { title: "更新履歴" },
    favorite: { addCharacter: "お気に入りに追加", removeCharacter: "お気に入り解除", addRacket: "お気に入りに追加", removeRacket: "お気に入り解除" },
    tier: { characterBoard: "キャラTier", racketBoard: "ラケットTier", poolTitle: "未配置アイコン", modalTitle: "Tier行を編集", labelName: "ラベル名", labelColor: "背景色", clearRow: "行の中身をクリア", addAbove: "上に行追加", addBelow: "下に行追加", deleteRow: "行を削除", addItem: "行を追加", unassigned: "未配置", ruleTitle: "ルール条件", addGlobal: "全ルール共通Tierを追加", addConditional: "条件別Tierを追加", deleteProfile: "現在のTierを削除", courtType: "コート種別", gameMode: "ゲームモード", itemRule: "フィーバーラケット", matchupBase: "選択キャラ", matchupBaseNone: "指定なし", matchupBaseIconAlt: "選択キャラのアイコン", globalLabel: "全ルール共通Tier", conditionalLabel: "条件別Tier", allConditions: "全条件", noProfiles: "該当するTierはありません", globalTab: "全ルール共通", conditionalTab: "条件別", profileDeleted: "Tierを削除しました", shareX: "Xへ画像投稿", saveImage: "画像で保存", shareXClipboard: "画像をコピーしました。X投稿画面で貼り付けてください", shareXClipboardAlert: "Tier画像をクリップボードにコピーしました。\nX投稿画面が開いたら、本文入力欄で貼り付け（Ctrl+V / 長押し→貼り付け）してください。", shareXFallback: "画像保存後にX投稿画面を開きました", shareXFallbackAlert: "クリップボードへのコピーに失敗したため、Tier画像を端末に保存しました。\nX投稿画面で画像を選択して添付してください。", shareXFailed: "X投稿画面を開けませんでした", imageSaved: "画像を保存しました", imageSaveFailed: "画像の保存に失敗しました" },
  },
  en: {
    site: { pageTitle: "Mario Tennis Fever Data Explorer", pageDescription: "Reference site for Mario Tennis Fever character, racket, and system data.", title: "Mario Tennis Fever Explorer", language: "Language", lead: "A reference site to compare character and racket traits with filters and sorting." },
    nav: { characters: "Characters", rackets: "Rackets", tier: "Tier" },
    section: { characters: { title: "Character List", description: "Compare traits and parameters by type." }, rackets: { title: "Racket List", description: "Compare effects and trigger timing." }, tips: { description: "Quickly review useful operation tips for matches." }, tier: { title: "Tier Board", description: "Rank characters and rackets by your own criteria." } },
    filter: { searchAndFilter: "Search / Filter", search: "Search", type: "Type", special: "Special", favoritesOnly: "Favorites only", sortBy: "Sort by", order: "Order", category: "Category", timing: "Effect timing", tipsCategory: "Category", verification: "Verification" },
    modal: { characterFilter: "Character Search / Filter", racketFilter: "Racket Search / Filter" },
    placeholder: { characterSearch: "Search by character name", racketSearch: "Search by racket name" },
    footer: { note: "Some data is provisional and will be updated later.", contactLabel: "Creator & Contact:", contactAccount: "@Lu_Na_Clock", changelog: "Changelog" },
    stat: { speed: "Speed", power: "Power", control: "Control", spin: "Spin" },
    sort: { name: "Name" },
    order: { game: "Game order", asc: "A → Z", desc: "Z → A", high: "High → Low", low: "Low → High" },
    common: { any: "Any", yes: "Yes", no: "None", wip: "Work in progress", count: "{{count}} shown", showCount: "Show {{count}}", searchHit: "Search hits: {{count}}", noCharacter: "No matching characters found.", noRacket: "No matching rackets found.", noTip: "No matching tips found.", language: "Language" },
    accordion: { special: "Special", gameText: "In-game text", details: "Show all", video: "Watch effect video" },
    video: { unavailable: "Video is coming soon.", checking: "Checking video availability…", openYoutube: "Open on YouTube" },
    chip: { type: "Type", search: "Search", special: "Special", favorites: "Favorites", sort: "Sort", order: "Order", category: "Category", timing: "Effect timing", yes: "Yes", no: "No" },
    aria: { sectionNav: "Section navigation", mobileNav: "Mobile section navigation", close: "Close", showChangelog: "Show changelog", collapseNav: "Collapse section nav", expandNav: "Expand section nav", contactX: "X account @Lu_Na_Clock" },
    type: { "オールラウンド": "All-Around", "テクニック": "Technical	", "パワー": "Powerful", "ディフェンス": "Defensive", "トリッキー": "Tricky", "スピード": "Speedy" },
    category: { "妨害": "Disruptive", "強化": "Boost", "その他": "Other", "不明": "Unknown" },
    timing: { "即時": "Instant", "バウンド時": "On Bounce", "不明": "Unknown" },
    tipsCategory: { "仕様": "Spec", "実践知識": "Practical" },
    verification: { "検証中": "Verifying", "検証済": "Verified" },
    tierValue: { hard: "Hard", clay: "Clay", grass: "Grass", singles: "Singles", doubles: "Doubles", fever: "Fever" },
    meta: { iconSuffix: " icon" },
    changelog: { title: "Changelog" },
    favorite: { addCharacter: "Add to favorites", removeCharacter: "Remove from favorites", addRacket: "Add to favorites", removeRacket: "Remove from favorites" },
    tier: { characterBoard: "Character Tier", racketBoard: "Racket Tier", poolTitle: "Unassigned Icons", modalTitle: "Edit Tier Row", labelName: "Label", labelColor: "Background color", clearRow: "Clear row", addAbove: "Add row above", addBelow: "Add row below", deleteRow: "Delete row", addItem: "Add row", unassigned: "Unassigned", ruleTitle: "Rule filters", addGlobal: "Add Global Tier", addConditional: "Add Conditional Tier", deleteProfile: "Delete Current Tier", courtType: "Court Type", gameMode: "Game Mode", itemRule: "Fever Racket", matchupBase: "Selected Character", matchupBaseNone: "None", matchupBaseIconAlt: "Selected character icon", globalLabel: "Global Tier", conditionalLabel: "Conditional Tier", allConditions: "All Conditions", noProfiles: "No tier boards match this filter", globalTab: "Global", conditionalTab: "Conditional", profileDeleted: "Tier deleted", shareX: "Post Image to X", saveImage: "Save as Image", shareXClipboard: "Image copied. Paste it in the X composer.", shareXClipboardAlert: "Tier image copied to your clipboard.\nWhen the X composer opens, paste it into the post field.", shareXFallback: "Saved image and opened X post dialog", shareXFallbackAlert: "Clipboard copy failed, so the Tier image was downloaded.\nPlease attach the saved image in the X composer.", shareXFailed: "Failed to open X post dialog", imageSaved: "Image saved", imageSaveFailed: "Failed to save image" },
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
const tipsList = document.getElementById("tips-list");
const tipsCount = document.getElementById("tips-count");
const tipsEmpty = document.getElementById("tips-empty");

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
const tipsCategoryFilter = document.getElementById("tips-category-filter");
const tipsVerificationFilter = document.getElementById("tips-verification-filter");

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


const tierCharacterMatchupBase = document.getElementById("tier-character-matchup-base");
const tierCharacterMatchupBasePreview = document.getElementById("tier-character-matchup-base-preview");

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
    matchupBase: "",
  };
}

function createInitialTierBoard(itemCount, kind = "global") {
  const rows = getTierDefaultRows(currentLocale).map((row) => makeTierRow(row.label, row.color));
  const rowOrders = Object.fromEntries(rows.map((row) => [row.id, []]));
  return {
    id: `profile-${Math.random().toString(36).slice(2, 10)}`,
    rows,
    placements: Object.fromEntries(Array.from({ length: itemCount }, (_, index) => [String(index), null])),
    poolOrder: Array.from({ length: itemCount }, (_, index) => index),
    rowOrders,
    meta: createTierMeta(kind),
  };
}

function normalizeRowOrders(rawRowOrders, rows, placements, itemCount) {
  const rowIdSet = new Set(rows.map((row) => row.id));
  const rowOrders = Object.fromEntries(rows.map((row) => [row.id, []]));

  if (rawRowOrders && typeof rawRowOrders === "object") {
    rows.forEach((row) => {
      const rawOrder = Array.isArray(rawRowOrders[row.id]) ? rawRowOrders[row.id] : [];
      rowOrders[row.id] = rawOrder.filter((value, index, source) => {
        if (!Number.isInteger(value) || value < 0 || value >= itemCount) return false;
        if (source.indexOf(value) !== index) return false;
        return placements[String(value)] === row.id;
      });
    });
  }

  for (let index = 0; index < itemCount; index += 1) {
    const rowId = placements[String(index)];
    if (!rowIdSet.has(rowId)) continue;
    if (!rowOrders[rowId].includes(index)) {
      rowOrders[rowId].push(index);
    }
  }

  return rowOrders;
}

function getRowItems(board, rowId) {
  if (!board || !rowId) return [];
  if (!board.rowOrders || !Array.isArray(board.rowOrders[rowId])) {
    return Object.entries(board.placements)
      .filter(([, targetRowId]) => targetRowId === rowId)
      .map(([index]) => Number(index))
      .sort((a, b) => a - b);
  }
  return board.rowOrders[rowId].filter((index) => board.placements[String(index)] === rowId);
}

function normalizeTierMeta(raw, fallbackKind = "conditional") {
  return {
    kind: raw?.kind === "global" ? "global" : fallbackKind,
    courtType: typeof raw?.courtType === "string" ? raw.courtType : "all",
    gameMode: raw?.gameMode === "singles" || raw?.gameMode === "doubles" ? raw.gameMode : "singles",
    items: raw?.items === "on" || raw?.items === "off" ? raw.items : "on",
    matchupBase: typeof raw?.matchupBase === "string" ? raw.matchupBase : "",
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
    rowOrders: normalizeRowOrders(raw.rowOrders, rows, placements, itemCount),
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
  return `#マリオテニスフィーバー ${title} | ${getProfileMetaLabel(profile.meta, boardKey)}\nhttps://mariotennis-fever-explorer.ai-lifebook.com/\n#MariTenniExplorer`;
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

  sanitizeTierBoardForMatchup(boardKey, profile);
  const rows = profile.rows.map((row) => {
    const itemIndexes = getAvailableItemIndexes(boardKey, profile, getRowItems(profile, row.id));
    return { row, itemIndexes };
  });

  const rowHeights = rows.map(({ itemIndexes }) => {
    const lines = Math.max(1, Math.ceil(itemIndexes.length / maxColumns));
    return Math.max(rowMinHeight, lines * iconSize + (lines - 1) * gap + 14);
  });

  const headerHeight = 118;
  const totalHeight = headerHeight + rowHeights.reduce((a, b) => a + b, 0) + 16;

  const canvas = document.createElement("canvas");
  canvas.width = boardWidth;
  canvas.height = totalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas context unavailable");

  ctx.fillStyle = "#061522";
  ctx.fillRect(0, 0, boardWidth, totalHeight);

  ctx.fillStyle = "#d8eaff";
  ctx.font = "bold 26px sans-serif";
  ctx.fillText(boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard"), 18, 36);

  ctx.fillStyle = "rgba(11, 31, 49, 0.9)";
  ctx.fillRect(14, 52, boardWidth - 28, 52);
  ctx.strokeStyle = "rgba(159, 195, 223, 0.45)";
  ctx.lineWidth = 1;
  ctx.strokeRect(14.5, 52.5, boardWidth - 29, 51);

  const matchupCharacter = boardKey === "characters" ? getMatchupBaseCharacter(profile) : null;
  const matchupIcon = matchupCharacter ? await loadImage(matchupCharacter.image).catch(() => null) : null;
  const metaParts = getProfileMetaParts(profile.meta, boardKey);
  let metaFontSize = 20;
  let metaWidth = Infinity;
  const iconOffsetWidth = matchupIcon ? 40 : 0;
  do {
    ctx.font = `bold ${metaFontSize}px sans-serif`;
    metaWidth = measureTierMetaPartsWidth(ctx, metaParts) + iconOffsetWidth;
    if (metaWidth <= boardWidth - 48 || metaFontSize <= 14) break;
    metaFontSize -= 1;
  } while (metaFontSize > 14);
  drawTierMetaParts(ctx, metaParts, 24, 86, matchupIcon);

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

  return canvas;
}

function downloadCanvasAsPng(canvas, filename) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
  link.click();
}

async function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("blob conversion failed"));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
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

function getMatchupBaseIndex(profile) {
  const raw = profile?.meta?.matchupBase;
  if (raw == null || raw === "") return null;
  const value = Number(raw);
  return Number.isInteger(value) && value >= 0 && value < characters.length ? value : null;
}
function getMatchupBaseCharacter(profile) {
  const index = getMatchupBaseIndex(profile);
  return Number.isInteger(index) ? characters[index] : null;
}


function getExcludedItemIndex(boardKey, profile) {
  if (boardKey !== "characters") return null;
  return getMatchupBaseIndex(profile);
}

function getAvailableItemIndexes(boardKey, profile, indexes) {
  const excluded = getExcludedItemIndex(boardKey, profile);
  if (!Number.isInteger(excluded)) return indexes;
  return indexes.filter((index) => index !== excluded);
}

function sanitizeTierBoardForMatchup(boardKey, profile) {
  const excluded = getExcludedItemIndex(boardKey, profile);
  if (!Number.isInteger(excluded)) return;
  const key = String(excluded);
  profile.placements[key] = null;
  profile.poolOrder = profile.poolOrder.filter((index) => index !== excluded);
  Object.values(profile.rowOrders || {}).forEach((order) => {
    if (!Array.isArray(order)) return;
    const idx = order.indexOf(excluded);
    if (idx >= 0) order.splice(idx, 1);
  });
}

function syncTierCharacterMatchupBaseOptions() {
  if (!tierCharacterMatchupBase) return;
  const active = getActiveTierProfile("characters");
  if (!active) return;

  const selectedValue = active.meta.matchupBase ?? "";
  const options = [
    `<option value="" data-i18n="tier.matchupBaseNone">${t("tier.matchupBaseNone")}</option>`,
    ...characters.map((character, index) => (`<option value="${index}">${localizeValue(character.name)}</option>`)),
  ];
  tierCharacterMatchupBase.innerHTML = options.join("");
  tierCharacterMatchupBase.value = String(selectedValue);

  if (!tierCharacterMatchupBasePreview) return;
  const baseCharacter = getMatchupBaseCharacter(active);
  if (!baseCharacter) {
    tierCharacterMatchupBasePreview.hidden = true;
    tierCharacterMatchupBasePreview.replaceChildren();
    return;
  }

  const image = document.createElement("img");
  image.src = baseCharacter.image;
  image.alt = `${localizeValue(baseCharacter.name)} ${t("tier.matchupBaseIconAlt")}`;
  tierCharacterMatchupBasePreview.hidden = false;
  tierCharacterMatchupBasePreview.replaceChildren(image);
}

function getProfileMetaLabel(meta, boardKey = "characters") {
  const courtLabel = meta.courtType === "all" ? t("common.any") : t(`tierValue.${meta.courtType}`);
  const modeLabel = t(`tierValue.${meta.gameMode}`);
  const itemLabels = { on: t("common.yes"), off: t("common.no") };
  const parts = [];
  if (boardKey === "characters") {
    const matchupCharacter = getMatchupBaseCharacter({ meta });
    if (matchupCharacter) {
      parts.push(`${t("tier.matchupBase")}: ${localizeValue(matchupCharacter.name)}`);
    }
  }
  parts.push(`${t("tier.itemRule")}: ${itemLabels[meta.items] ?? meta.items}`);
  parts.push(`${t("tier.gameMode")}: ${modeLabel}`);
  parts.push(`${t("tier.courtType")}: ${courtLabel}`);
  return parts.join(" / ");
}

function getProfileMetaParts(meta, boardKey = "characters") {
  const courtLabel = meta.courtType === "all" ? t("common.any") : t(`tierValue.${meta.courtType}`);
  const modeLabel = t(`tierValue.${meta.gameMode}`);
  const itemLabels = { on: t("common.yes"), off: t("common.no") };
  const parts = [];
  if (boardKey === "characters") {
    const matchupCharacter = getMatchupBaseCharacter({ meta });
    if (matchupCharacter) {
      parts.push({ label: `${t("tier.matchupBase")}: `, value: localizeValue(matchupCharacter.name), color: "#a78bfa" });
    }
  }
  parts.push({ label: `${t("tier.itemRule")}: `, value: itemLabels[meta.items] ?? meta.items, color: "#f97316" });
  parts.push({ label: `${t("tier.gameMode")}: `, value: modeLabel, color: "#22c55e" });
  parts.push({ label: `${t("tier.courtType")}: `, value: courtLabel, color: "#38bdf8" });
  return parts;
}

function measureTierMetaPartsWidth(ctx, parts) {
  let width = 0;
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    width += ctx.measureText(part.label).width;
    width += ctx.measureText(part.value).width + 18;
    if (i < parts.length - 1) width += ctx.measureText(" / ").width;
  }
  return width;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawTierMetaParts(ctx, parts, startX, baselineY, iconImage = null) {
  let x = startX;
  if (iconImage) {
    const iconSize = 30;
    const iconY = baselineY - 24;
    drawRoundedRect(ctx, x, iconY, iconSize, iconSize, 7);
    ctx.save();
    ctx.clip();
    ctx.drawImage(iconImage, x, iconY, iconSize, iconSize);
    ctx.restore();
    ctx.strokeStyle = "rgba(159, 195, 223, 0.6)";
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, x + 0.5, iconY + 0.5, iconSize - 1, iconSize - 1, 7);
    ctx.stroke();
    x += iconSize + 10;
  }

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    ctx.fillStyle = "#b9d5eb";
    ctx.fillText(part.label, x, baselineY);
    x += ctx.measureText(part.label).width;

    const valueWidth = ctx.measureText(part.value).width;
    const boxWidth = valueWidth + 18;
    const boxHeight = 28;
    const boxY = baselineY - 22;

    ctx.fillStyle = part.color;
    drawRoundedRect(ctx, x, boxY, boxWidth, boxHeight, 8);
    ctx.fill();

    ctx.fillStyle = "#061522";
    ctx.fillText(part.value, x + 9, baselineY);
    x += boxWidth;

    if (i < parts.length - 1) {
      ctx.fillStyle = "#8eb4d1";
      ctx.fillText(" / ", x, baselineY);
      x += ctx.measureText(" / ").width;
    }
  }
}

function updateTierRuleLabel(boardKey) {
  const labelEl = tierRuleLabels[boardKey];
  const active = getActiveTierProfile(boardKey);
  if (!labelEl || !active) return;
  labelEl.textContent = getProfileMetaLabel(active.meta, boardKey);
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


function getFilteredTips() {
  const categoryValue = tipsCategoryFilter?.value || "all";
  const verificationValue = tipsVerificationFilter?.value || "all";

  return tips.filter((tip) => {
    const categoryMatch = categoryValue === "all" || rawValue(tip.category) === categoryValue;
    const verificationMatch = verificationValue === "all" || rawValue(tip.verification) === verificationValue;
    return categoryMatch && verificationMatch;
  });
}

function createTipCard(tip) {
  const card = document.createElement("article");
  card.className = "tip-card";

  const category = document.createElement("span");
  category.className = "tip-card__category";
  category.textContent = t(`tipsCategory.${rawValue(tip.category)}`);

  const verification = document.createElement("span");
  verification.className = "tip-card__verification";
  verification.textContent = t(`verification.${rawValue(tip.verification)}`);

  const title = document.createElement("h3");
  title.className = "tip-card__title";
  title.textContent = localizeValue(tip.title);

  const text = document.createElement("p");
  text.className = "tip-card__text";
  text.textContent = localizeValue(tip.content);

  card.append(category, verification, title, text);
  return card;
}

function renderTips() {
  if (!tipsList || !tipsCount || !tipsEmpty) return;

  const filteredTips = getFilteredTips();
  const fragment = document.createDocumentFragment();

  filteredTips.forEach((tip) => fragment.append(createTipCard(tip)));
  tipsList.replaceChildren(fragment);

  tipsCount.textContent = t("common.count", { count: filteredTips.length });
  tipsEmpty.hidden = filteredTips.length !== 0;
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


function ensureBoardRowOrders(board) {
  if (!board) return;
  board.rowOrders = normalizeRowOrders(board.rowOrders, board.rows, board.placements, getBoardItemsLength(board));
}

function getBoardItemsLength(board) {
  return Object.keys(board.placements).length;
}

function getItemZone(board, itemIndex) {
  const rowId = board.placements[String(itemIndex)];
  if (rowId != null) return { rowId, isPool: false };
  return { rowId: null, isPool: true };
}

function removeItemFromAllOrders(board, itemIndex) {
  board.poolOrder = board.poolOrder.filter((value) => value !== itemIndex);
  Object.keys(board.rowOrders).forEach((rowId) => {
    board.rowOrders[rowId] = board.rowOrders[rowId].filter((value) => value !== itemIndex);
  });
}

function appendItemToZone(board, itemIndex, targetRowId) {
  if (targetRowId == null) {
    if (!board.poolOrder.includes(itemIndex)) board.poolOrder.push(itemIndex);
    board.placements[String(itemIndex)] = null;
    return;
  }

  if (!Array.isArray(board.rowOrders[targetRowId])) {
    board.rowOrders[targetRowId] = [];
  }
  if (!board.rowOrders[targetRowId].includes(itemIndex)) {
    board.rowOrders[targetRowId].push(itemIndex);
  }
  board.placements[String(itemIndex)] = targetRowId;
}

function insertItemToZoneAt(board, itemIndex, targetRowId, targetIndex) {
  if (targetRowId == null) {
    const clampedIndex = Math.max(0, Math.min(targetIndex, board.poolOrder.length));
    board.poolOrder.splice(clampedIndex, 0, itemIndex);
    board.placements[String(itemIndex)] = null;
    return;
  }

  if (!Array.isArray(board.rowOrders[targetRowId])) {
    board.rowOrders[targetRowId] = [];
  }

  const order = board.rowOrders[targetRowId];
  const clampedIndex = Math.max(0, Math.min(targetIndex, order.length));
  order.splice(clampedIndex, 0, itemIndex);
  board.placements[String(itemIndex)] = targetRowId;
}

function moveTierItem(boardKey, itemIndex, targetRowId) {
  const board = getActiveTierProfile(boardKey);
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);
  removeItemFromAllOrders(board, itemIndex);
  appendItemToZone(board, itemIndex, targetRowId);
  saveTierBoards();
  renderTierBoard(boardKey);
}

function swapTierItems(boardKey, sourceItemIndex, targetItemIndex) {
  if (sourceItemIndex === targetItemIndex) return;
  const board = getActiveTierProfile(boardKey);
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);

  const sourceZone = getItemZone(board, sourceItemIndex);
  const targetZone = getItemZone(board, targetItemIndex);

  const sourceOrder = sourceZone.isPool ? board.poolOrder : (board.rowOrders[sourceZone.rowId] || []);
  const targetOrder = targetZone.isPool ? board.poolOrder : (board.rowOrders[targetZone.rowId] || []);
  const sourceIndex = sourceOrder.indexOf(sourceItemIndex);
  const targetIndex = targetOrder.indexOf(targetItemIndex);

  if (sourceIndex === -1 || targetIndex === -1) return;

  const isSameZone = sourceOrder === targetOrder;
  if (isSameZone) {
    sourceOrder[sourceIndex] = targetItemIndex;
    sourceOrder[targetIndex] = sourceItemIndex;
    saveTierBoards();
    renderTierBoard(boardKey);
    return;
  }

  removeItemFromAllOrders(board, sourceItemIndex);
  removeItemFromAllOrders(board, targetItemIndex);

  insertItemToZoneAt(board, sourceItemIndex, targetZone.rowId, targetIndex);
  insertItemToZoneAt(board, targetItemIndex, sourceZone.rowId, sourceIndex);

  saveTierBoards();
  renderTierBoard(boardKey);
}

function createTierItem(boardKey, itemIndex, rowId = null) {
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
    event.dataTransfer?.setData("text/plain", JSON.stringify({ boardKey, itemIndex, sourceRowId: rowId }));
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

      const targetItemButton = event.target.closest(".tier-item");
      const targetItemIndex = Number(targetItemButton?.dataset.itemIndex);

      if (Number.isInteger(targetItemIndex)) {
        swapTierItems(boardKey, parsed.itemIndex, targetItemIndex);
        return;
      }

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
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);
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

    getAvailableItemIndexes(boardKey, board, getRowItems(board, row.id))
      .forEach((itemIndex) => items.append(createTierItem(boardKey, itemIndex, row.id)));

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
    const row = makeTierRow(String.fromCharCode(65 + board.rows.length), "#7aa6ff");
    board.rows.push(row);
    board.rowOrders[row.id] = [];
    saveTierBoards();
    renderTierBoard(boardKey);
  });
  boardFrag.append(addRow);

  boardEl.replaceChildren(boardFrag);

  const poolFrag = document.createDocumentFragment();
  setupDropZone(poolEl, boardKey, null);
  getAvailableItemIndexes(boardKey, board, board.poolOrder).forEach((itemIndex) => {
    poolFrag.append(createTierItem(boardKey, itemIndex, null));
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
        if (boardKey === "characters" && key === "matchupBase") {
          sanitizeTierBoardForMatchup(boardKey, active);
          syncTierCharacterMatchupBaseOptions();
        }
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
        const blob = await canvasToBlob(canvas);

        if (navigator.clipboard?.write && window.ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            window.alert(t("tier.shareXClipboardAlert"));
            const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(intent, "_blank", "noopener,noreferrer");
            showTierShareStatus(boardKey, "tier.shareXClipboard");
            return;
          } catch {
            // clipboard fallback
          }
        }

        downloadCanvasAsPng(canvas, `tier-${boardKey}-${Date.now()}.png`);
        window.alert(t("tier.shareXFallbackAlert"));
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
    const row = makeTierRow("New", "#90a4ae");
    board.rows.splice(rowIndex + offset, 0, row);
    board.rowOrders[row.id] = [];
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
    delete board.rowOrders[rowModalState.rowId];
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
  syncTierCharacterMatchupBaseOptions();
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
  renderTips();
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
tipsCategoryFilter?.addEventListener("change", renderTips);
tipsVerificationFilter?.addEventListener("change", renderTips);


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
