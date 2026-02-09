import { characters, rackets, changelog } from "../data.js";

const translations = {
  ja: {
    site: { pageTitle: "マリオテニスフィーバー データ参照サイト", pageDescription: "マリオテニスフィーバーのキャラクターやラケット、システム関連データを一覧で確認できる参照サイト。", title: "マリオテニスフィーバー Explorer", language: "Language", lead: "キャラクターやラケットの特徴などを確認できるデータまとめサイトです。フィルタ・ソートで目的の情報を整理しながら参照できます。" },
    nav: { characters: "キャラ", rackets: "ラケット", favorites: "お気に入り" },
    section: { characters: { title: "キャラクター一覧", description: "タイプ別の特徴やパラメータを比較できます。" }, rackets: { title: "ラケット一覧", description: "効果やタイミングを比較できます。" }, tips: { description: "試合で役立つ操作のポイントを素早く確認できます。" }, favorites: { title: "お気に入り候補", description: "よく使う構成のチェック用セクションです。", note: "お気に入り登録機能は準備中です。アップデートで保存・呼び出しに対応予定です。" } },
    filter: { searchAndFilter: "検索・絞り込み", search: "検索", type: "タイプ", special: "特殊能力", sortBy: "ソート項目", order: "並び順", category: "種類", timing: "効果タイミング" },
    modal: { characterFilter: "キャラクターの検索・絞り込み", racketFilter: "ラケットの検索・絞り込み" },
    placeholder: { characterSearch: "キャラクター名で検索", racketSearch: "ラケット名で検索" },
    footer: { note: "データは仮入力を含みます。後日更新予定です。", changelog: "更新履歴" },
    stat: { speed: "スピード", power: "パワー", control: "コントロール", spin: "スピン" },
    sort: { name: "名前" },
    order: { game: "ゲーム内順", asc: "昇順", desc: "降順", high: "数値が高い順", low: "数値が低い順" },
    common: { any: "指定なし", yes: "あり", no: "なし", wip: "仮実装", count: "{{count}}件表示", showCount: "{{count}}件を表示", searchHit: "検索ヒット: {{count}}件", noCharacter: "一致するキャラクターが見つかりません。", noRacket: "一致するラケットが見つかりません。", language: "言語" },
    accordion: { special: "特殊能力", gameText: "ゲーム内テキスト", details: "全項目を見る", video: "動画で効果を確認する" },
    video: { unavailable: "動画は準備中です。", checking: "動画の有無を確認中です…", openYoutube: "YouTubeで開く" },
    chip: { type: "タイプ", search: "検索", special: "特殊能力", sort: "ソート", order: "並び順", category: "種類", timing: "効果タイミング", yes: "あり", no: "なし" },
    aria: { sectionNav: "セクションナビゲーション", mobileNav: "モバイルセクションナビ", close: "閉じる", showChangelog: "更新履歴を表示", collapseNav: "セクションナビをたたむ", expandNav: "セクションナビを表示" },
    type: { "オールラウンド": "オールラウンド", "テクニック": "テクニック", "パワー": "パワー", "ディフェンス": "ディフェンス", "トリッキー": "トリッキー", "スピード": "スピード" },
    category: { "妨害": "妨害", "強化": "強化", "その他": "その他", "不明": "不明" },
    timing: { "即時": "即時", "バウンド時": "バウンド時", "不明": "不明" },
    meta: { iconSuffix: "のアイコン" },
    changelog: { title: "更新履歴" },
  },
  en: {
    site: { pageTitle: "Mario Tennis Fever Data Explorer", pageDescription: "Reference site for Mario Tennis Fever character, racket, and system data.", title: "Mario Tennis Fever Explorer", language: "Language", lead: "A reference site to compare character and racket traits with filters and sorting." },
    nav: { characters: "Characters", rackets: "Rackets", favorites: "Favorites" },
    section: { characters: { title: "Character List", description: "Compare traits and parameters by type." }, rackets: { title: "Racket List", description: "Compare effects and trigger timing." }, tips: { description: "Quickly review useful operation tips for matches." }, favorites: { title: "Favorite Candidates", description: "A section to check often-used setups.", note: "Favorite registration is under development. Save/load support is planned." } },
    filter: { searchAndFilter: "Search / Filter", search: "Search", type: "Type", special: "Special", sortBy: "Sort by", order: "Order", category: "Category", timing: "Effect timing" },
    modal: { characterFilter: "Character Search / Filter", racketFilter: "Racket Search / Filter" },
    placeholder: { characterSearch: "Search by character name", racketSearch: "Search by racket name" },
    footer: { note: "Some data is provisional and will be updated later.", changelog: "Changelog" },
    stat: { speed: "Speed", power: "Power", control: "Control", spin: "Spin" },
    sort: { name: "Name" },
    order: { game: "Game order", asc: "A → Z", desc: "Z → A", high: "High → Low", low: "Low → High" },
    common: { any: "Any", yes: "Yes", no: "None", wip: "Work in progress", count: "{{count}} shown", showCount: "Show {{count}}", searchHit: "Search hits: {{count}}", noCharacter: "No matching characters found.", noRacket: "No matching rackets found.", language: "Language" },
    accordion: { special: "Special", gameText: "In-game text", details: "Show all", video: "Watch effect video" },
    video: { unavailable: "Video is coming soon.", checking: "Checking video availability…", openYoutube: "Open on YouTube" },
    chip: { type: "Type", search: "Search", special: "Special", sort: "Sort", order: "Order", category: "Category", timing: "Timing", yes: "Yes", no: "No" },
    aria: { sectionNav: "Section navigation", mobileNav: "Mobile section navigation", close: "Close", showChangelog: "Show changelog", collapseNav: "Collapse section nav", expandNav: "Expand section nav" },
    type: { "オールラウンド": "All-Around", "テクニック": "Technical	", "パワー": "Powerful", "ディフェンス": "Defensive", "トリッキー": "Tricky", "スピード": "Speedy" },
    category: { "妨害": "Disruptive", "強化": "Boost", "その他": "Other", "不明": "Unknown" },
    timing: { "即時": "Instant", "バウンド時": "On Bounce", "不明": "Unknown" },
    meta: { iconSuffix: " icon" },
    changelog: { title: "Changelog" },
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

  header.append(title, image);

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

  header.append(title, image);

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
  syncCharacterOrderAvailability();
  renderCharacters();
  renderRackets();
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

bindChangeListeners([characterTypeFilter, characterSpecialFilter, characterOrder], renderCharacters);
bindChangeListeners([racketTypeFilter, racketTimingFilter, racketOrder], renderRackets);
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
