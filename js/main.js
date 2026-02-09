import { characters, rackets, changelog } from "../data.js";

const statLabels = {
  speed: "スピード",
  power: "パワー",
  control: "コントロール",
  spin: "スピン",
};

const characterSortLabels = {
  name: "名前",
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
  name.textContent = label;

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
  return Object.entries(stats).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"));
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
    <h3>${character.name}</h3>
    <p class="badge">${character.type}</p>
  `;

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = `${character.name}のアイコン`;
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

    const special = createAccordion("特殊能力", character.special);

    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(createAccordion("ゲーム内テキスト", character.text));

    const details = createAccordion("全項目を見る", detailsBody);
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

  const special = createAccordion("特殊能力", character.special);
  const text = createAccordion("ゲーム内テキスト", character.text);
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
    <h3 class="racket-title">${racket.name}</h3>
    <div class="badge-group badge-group--racket">
      <span class="badge">${racket.category}</span>
      <span class="badge badge--soft">${racket.timing}</span>
    </div>
  `;

  const image = document.createElement("img");
  image.src = racket.image;
  image.alt = `${racket.name}のアイコン`;
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
  effect.textContent = racket.effect;

  if (mobileView) {
    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(effect, createAccordion("ゲーム内テキスト", racket.text));

    const details = createAccordion("全項目を見る", detailsBody);
    details.classList.add("accordion--details");
    card.append(header, details);
    return card;
  }

  const text = createAccordion("ゲーム内テキスト", racket.text);

  card.append(header, effect, text);
  return card;
}

function sortItems(items, key, order) {
  if (order === "game" && key === "name") {
    return [...items];
  }

  const sorted = [...items];
  sorted.sort((a, b) => {
    if (key === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name, "ja")
        : b.name.localeCompare(a.name, "ja");
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
    option.textContent = isNameSort ? "昇順" : "数値が高い順";
  });

  descOptions.forEach((option) => {
    option.textContent = isNameSort ? "降順" : "数値が低い順";
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
    applyButton.textContent = `${count}件を表示`;
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
    filtered = filtered.filter((character) => character.type === typeValue);
  }
  if (searchValue) {
    filtered = filtered.filter((character) => normalizeKana(character.name).includes(searchValue));
  }
  if (specialValue === "yes") {
    filtered = filtered.filter((character) => character.special !== "なし");
  }
  if (specialValue === "no") {
    filtered = filtered.filter((character) => character.special === "なし");
  }

  return filtered;
}

function updateCharacterActiveFilterChips() {
  characterActiveFilters.innerHTML = "";
  const chips = [];

  if (characterTypeFilter.value !== "all") {
    chips.push({ key: "type", label: `タイプ: ${characterTypeFilter.value}` });
  }
  if (characterSearch.value.trim()) {
    chips.push({ key: "search", label: `検索: ${characterSearch.value.trim()}` });
  }
  if (characterSpecialFilter.value === "yes") {
    chips.push({ key: "special", label: "特殊能力: あり" });
  }
  if (characterSpecialFilter.value === "no") {
    chips.push({ key: "special", label: "特殊能力: なし" });
  }
  if (characterSort.value !== "name") {
    chips.push({ key: "sort", label: `ソート: ${characterSortLabels[characterSort.value] ?? characterSort.value}` });
  }
  if (characterOrder.value === "asc") {
    chips.push({
      key: "order",
      label: `並び順: ${characterSort.value === "name" ? "昇順" : "数値が高い順"}`,
    });
  }
  if (characterOrder.value === "desc") {
    chips.push({
      key: "order",
      label: `並び順: ${characterSort.value === "name" ? "降順" : "数値が低い順"}`,
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
    chips.push({ key: "type", label: `種類: ${racketTypeFilter.value}` });
  }
  if (racketSearch.value.trim()) {
    chips.push({ key: "search", label: `検索: ${racketSearch.value.trim()}` });
  }
  if (racketTimingFilter.value !== "all") {
    chips.push({ key: "timing", label: `効果タイミング: ${racketTimingFilter.value}` });
  }
  if (racketOrder.value === "asc") {
    chips.push({ key: "order", label: "並び順: 昇順" });
  }
  if (racketOrder.value === "desc") {
    chips.push({ key: "order", label: "並び順: 降順" });
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
  name.textContent = racket.name;

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
    label.textContent = `検索ヒット: ${filteredRackets.length}件`;

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredRackets.forEach((racket) => {
      list.append(createRacketSearchShortcut(racket));
    });

    if (!filteredRackets.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = "一致するラケットが見つかりません。";
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
  name.textContent = character.name;

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
    label.textContent = `検索ヒット: ${filteredCharacters.length}件`;

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredCharacters.forEach((character) => {
      list.append(createCharacterSearchShortcut(character));
    });

    if (!filteredCharacters.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = "一致するキャラクターが見つかりません。";
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

  characterCount.textContent = `${sorted.length}件表示`;
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
    filtered = filtered.filter((racket) => racket.category === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => racket.timing === timingValue);
  }
  if (searchValue) {
    filtered = filtered.filter((racket) => normalizeKana(racket.name).includes(searchValue));
  }

  return filtered;
}

function renderRackets() {
  const filteredRackets = getFilteredRackets();
  const sorted = sortItems(filteredRackets, "name", racketOrder.value);

  const fragment = document.createDocumentFragment();
  sorted.forEach((racket) => fragment.append(createRacketCard(racket)));
  racketList.replaceChildren(fragment);

  racketCount.textContent = `${sorted.length}件表示`;
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
    dateEl.textContent = entry.date;

    const ul = document.createElement("ul");
    ul.className = "changelog-entry__items";
    entry.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
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


function setupSectionNavToggle() {
  const toggle = document.querySelector("[data-section-nav-toggle]");
  const links = document.getElementById("desktop-section-nav-links");

  if (!toggle || !links) {
    return;
  }

  const updateCollapsedState = (isExpanded) => {
    toggle.setAttribute("aria-expanded", String(isExpanded));
    toggle.textContent = isExpanded ? "ナビをたたむ" : "ナビを表示";
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

renderCharacters();
renderRackets();
setupSectionCollapse();
setupAccordionRowSync();
setupSectionNavToggle();
setupSectionNav();
