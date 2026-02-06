import { characters, rackets } from "../data.js";

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

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketOrder = document.getElementById("racket-order");
const racketSearch = document.getElementById("racket-search");

const mobileNavItems = Array.from(document.querySelectorAll(".mobile-bottom-nav__item"));
const mobileSections = mobileNavItems
  .map((item) => document.getElementById(item.dataset.target))
  .filter(Boolean);


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

function isMobileView() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function createCharacterCard(character) {
  const card = document.createElement("article");
  card.className = "card";

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

    Object.entries(character.stats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .forEach(([key, value]) => {
        compactStats.append(createStatRow(statLabels[key], value));
      });

    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(
      stats,
      createAccordion("特殊能力", character.special),
      createAccordion("ゲーム内テキスト", character.text)
    );

    const details = createAccordion("全項目を見る", detailsBody);
    details.classList.add("accordion--details");
    card.append(header, compactStats, details);
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
  image.className = "card-image card-image--racket";

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

    return order === "asc" ? a.stats[key] - b.stats[key] : b.stats[key] - a.stats[key];
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

function renderCharacters() {
  syncCharacterOrderAvailability();

  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;
  const sorted = sortItems(getFilteredCharacters(), sortKey, orderValue);

  characterList.innerHTML = "";
  sorted.forEach((character) => characterList.append(createCharacterCard(character)));

  characterCount.textContent = `${sorted.length}件表示`;
  updateApplyButtonCount("character-filter-apply", sorted.length);

  updateCharacterActiveFilterChips();
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
  const sorted = sortItems(getFilteredRackets(), "name", racketOrder.value);

  racketList.innerHTML = "";
  sorted.forEach((racket) => racketList.append(createRacketCard(racket)));

  racketCount.textContent = `${sorted.length}件表示`;
  updateApplyButtonCount("racket-filter-apply", sorted.length);
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

function activateMobileNav(sectionId) {
  mobileNavItems.forEach((item) => {
    const isActive = item.dataset.target === sectionId;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setupMobileSectionNav() {
  if (!mobileNavItems.length || !mobileSections.length) {
    return;
  }

  mobileNavItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = item.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${targetId}`);
      activateMobileNav(targetId);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length) {
        activateMobileNav(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0.2, 0.4, 0.6],
    }
  );

  mobileSections.forEach((section) => observer.observe(section));

  const initialId = window.location.hash?.replace("#", "");
  activateMobileNav(initialId || mobileSections[0].id);
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

bindChangeListeners([characterTypeFilter, characterSpecialFilter, characterOrder], renderCharacters);
bindChangeListeners([racketTypeFilter, racketTimingFilter, racketOrder], renderRackets);
characterSort.addEventListener("change", handleCharacterSortChange);
characterSearch.addEventListener("input", renderCharacters);
racketSearch.addEventListener("input", renderRackets);


setupCharacterFilterChips();
setupFilterModal("character-filter-modal", "character-inline-filters", "character-modal-filters", "character-filter-apply", renderCharacters);
setupFilterModal("racket-filter-modal", "racket-inline-filters", "racket-modal-filters", "racket-filter-apply", renderRackets);

renderCharacters();
renderRackets();
setupSectionCollapse();
setupMobileSectionNav();
