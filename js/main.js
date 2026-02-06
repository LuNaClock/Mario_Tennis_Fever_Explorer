import { characters, rackets } from "../data.js";

const statLabels = {
  speed: "スピード",
  power: "パワー",
  control: "コントロール",
  spin: "スピン",
};

const maxStatValue = 5;

const characterList = document.getElementById("character-list");
const racketList = document.getElementById("racket-list");
const characterCount = document.getElementById("character-count");
const racketCount = document.getElementById("racket-count");

const characterTypeFilter = document.getElementById("character-type-filter");
const characterSort = document.getElementById("character-sort");
const characterOrder = document.getElementById("character-order");
const characterSearch = document.getElementById("character-search");
const characterPresetButtons = Array.from(document.querySelectorAll("#character-presets .preset-chip"));
const characterActiveFilters = document.getElementById("character-active-filters");

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketOrder = document.getElementById("racket-order");

const mobileNavItems = Array.from(document.querySelectorAll(".mobile-bottom-nav__item"));
const mobileSections = mobileNavItems
  .map((item) => document.getElementById(item.dataset.target))
  .filter(Boolean);

const characterPresets = {
  speed: { type: "スピード", sort: "speed", order: "desc", search: "" },
  beginner: { type: "オールラウンド", sort: "control", order: "desc", search: "" },
  serve: { type: "all", sort: "power", order: "desc", search: "" },
};

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
  fill.style.width = `${(value / maxStatValue) * 100}%`;

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
  panel.textContent = content;

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
  });

  wrapper.append(button, panel);
  return wrapper;
}

function createCharacterCard(character) {
  const card = document.createElement("article");
  card.className = "card";

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

  const special = createAccordion("特殊能力", character.special);
  const text = createAccordion("ゲーム内テキスト", character.text);

  card.append(header, stats, special, text);
  return card;
}

function createRacketCard(racket) {
  const card = document.createElement("article");
  card.className = "card";

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

  const text = createAccordion("ゲーム内テキスト", racket.text);

  card.append(header, effect, text);
  return card;
}

function sortItems(items, key, order) {
  const sorted = [...items];
  sorted.sort((a, b) => {
    let aValue;
    let bValue;

    if (key === "name") {
      aValue = a.name;
      bValue = b.name;
      return order === "asc" ? aValue.localeCompare(bValue, "ja") : bValue.localeCompare(aValue, "ja");
    }

    aValue = a.stats[key];
    bValue = b.stats[key];
    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
  return sorted;
}

function getFilteredCharacters() {
  const typeValue = characterTypeFilter.value;
  const searchValue = characterSearch.value.trim().toLowerCase();

  let filtered = characters;
  if (typeValue !== "all") {
    filtered = filtered.filter((character) => character.type === typeValue);
  }
  if (searchValue) {
    filtered = filtered.filter((character) => character.name.toLowerCase().includes(searchValue));
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
  if (characterSort.value !== "name") {
    const map = { speed: "スピード", power: "パワー", control: "コントロール", spin: "スピン" };
    chips.push({ key: "sort", label: `ソート: ${map[characterSort.value] ?? characterSort.value}` });
  }
  if (characterOrder.value !== "desc") {
    chips.push({ key: "order", label: "並び順: 昇順" });
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
  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;
  const sorted = sortItems(getFilteredCharacters(), sortKey, orderValue);

  characterList.innerHTML = "";
  sorted.forEach((character) => characterList.append(createCharacterCard(character)));

  characterCount.textContent = `${sorted.length}件表示`;

  const characterApply = document.getElementById("character-filter-apply");
  if (characterApply) {
    characterApply.textContent = `${sorted.length}件を表示`;
  }

  updateCharacterActiveFilterChips();
}

function getFilteredRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;

  let filtered = rackets;
  if (typeValue !== "all") {
    filtered = filtered.filter((racket) => racket.category === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => racket.timing === timingValue);
  }

  return filtered;
}

function renderRackets() {
  const sorted = sortItems(getFilteredRackets(), "name", racketOrder.value);

  racketList.innerHTML = "";
  sorted.forEach((racket) => racketList.append(createRacketCard(racket)));

  racketCount.textContent = `${sorted.length}件表示`;

  const racketApply = document.getElementById("racket-filter-apply");
  if (racketApply) {
    racketApply.textContent = `${sorted.length}件を表示`;
  }
}

function applyCharacterPreset(presetKey) {
  const preset = characterPresets[presetKey];
  if (!preset) {
    return;
  }

  characterTypeFilter.value = preset.type;
  characterSort.value = preset.sort;
  characterOrder.value = preset.order;
  characterSearch.value = preset.search;

  characterPresetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === presetKey);
  });

  renderCharacters();
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
      case "sort":
        characterSort.value = "name";
        break;
      case "order":
        characterOrder.value = "desc";
        break;
      default:
        break;
    }

    characterPresetButtons.forEach((presetButton) => presetButton.classList.remove("is-active"));
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

  sourceControls.forEach((sourceControl) => {
    const targetControl = modalControls.find((item) => item.id === sourceControl.id);
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
      const targetControl = modalControls.find((item) => item.id === sourceControl.id);
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

[characterTypeFilter, characterSort, characterOrder].forEach((element) => {
  element.addEventListener("change", () => {
    characterPresetButtons.forEach((button) => button.classList.remove("is-active"));
    renderCharacters();
  });
});
characterSearch.addEventListener("input", () => {
  characterPresetButtons.forEach((button) => button.classList.remove("is-active"));
  renderCharacters();
});

[racketTypeFilter, racketTimingFilter, racketOrder].forEach((element) => {
  element.addEventListener("change", renderRackets);
});

characterPresetButtons.forEach((button) => {
  button.addEventListener("click", () => applyCharacterPreset(button.dataset.preset));
});

setupCharacterFilterChips();
setupFilterModal("character-filter-modal", "character-inline-filters", "character-modal-filters", "character-filter-apply", renderCharacters);
setupFilterModal("racket-filter-modal", "racket-inline-filters", "racket-modal-filters", "racket-filter-apply", renderRackets);

renderCharacters();
renderRackets();
setupMobileSectionNav();
