import { characters, rackets } from "../data.js";

const statLabels = {
  speed: "スピード",
  power: "パワー",
  control: "コントロール",
  spin: "スピン",
};

const statKeys = Object.keys(statLabels);
const maxStatValue = 5;
const compareStorageKey = "mtf-compare-selection";
const compareLimit = 3;

const characterList = document.getElementById("character-list");
const racketList = document.getElementById("racket-list");
const characterCount = document.getElementById("character-count");
const racketCount = document.getElementById("racket-count");

const characterTypeFilter = document.getElementById("character-type-filter");
const characterSort = document.getElementById("character-sort");
const characterOrder = document.getElementById("character-order");

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketOrder = document.getElementById("racket-order");

const comparisonResults = document.getElementById("comparison-results");
const compareSummary = document.getElementById("compare-summary");
const compareTray = document.getElementById("compare-tray");
const compareTrayItems = document.getElementById("compare-tray-items");
const compareClear = document.getElementById("compare-clear");
const compareShare = document.getElementById("compare-share");
const compareShareStatus = document.getElementById("compare-share-status");

const mobileNavItems = Array.from(document.querySelectorAll(".mobile-bottom-nav__item"));
const mobileSections = mobileNavItems
  .map((item) => document.getElementById(item.dataset.target))
  .filter(Boolean);

const characterByIndex = new Map(characters.map((character, index) => [index, character]));
let selectedCompareIndices = new Set();

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

function createCharacterCard(character, index) {
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

  const compareToggle = document.createElement("button");
  compareToggle.type = "button";
  compareToggle.className = "compare-toggle";

  const syncToggleState = () => {
    const isSelected = selectedCompareIndices.has(index);
    compareToggle.classList.toggle("is-selected", isSelected);
    compareToggle.textContent = isSelected ? "比較対象から外す" : "比較対象に追加";
    compareToggle.setAttribute("aria-pressed", String(isSelected));
    compareToggle.disabled = !isSelected && selectedCompareIndices.size >= compareLimit;
  };

  compareToggle.addEventListener("click", () => {
    if (selectedCompareIndices.has(index)) {
      selectedCompareIndices.delete(index);
    } else if (selectedCompareIndices.size < compareLimit) {
      selectedCompareIndices.add(index);
    }
    persistCompareSelection();
    renderCharacters();
    renderComparison();
  });

  syncToggleState();

  const stats = document.createElement("div");
  stats.className = "stats";
  Object.entries(character.stats).forEach(([key, value]) => {
    stats.append(createStatRow(statLabels[key], value));
  });

  const special = createAccordion("特殊能力", character.special);
  const text = createAccordion("ゲーム内テキスト", character.text);

  card.append(header, compareToggle, stats, special, text);
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
    if (key === "name") {
      return order === "asc" ? a.name.localeCompare(b.name, "ja") : b.name.localeCompare(a.name, "ja");
    }

    return order === "asc" ? a.stats[key] - b.stats[key] : b.stats[key] - a.stats[key];
  });
  return sorted;
}

function getSelectedCharacters() {
  return Array.from(selectedCompareIndices)
    .map((index) => ({ index, character: characterByIndex.get(index) }))
    .filter((entry) => Boolean(entry.character));
}

function getAdvantageInfo(value, bestValue) {
  if (value === bestValue) {
    return { icon: "▲", label: "優位", className: "is-advantage" };
  }
  return { icon: "▼", label: "劣勢", className: "is-disadvantage" };
}

function createComparisonTable(entries) {
  const tableWrap = document.createElement("div");
  tableWrap.className = "compare-table-wrap";

  const table = document.createElement("table");
  table.className = "compare-table";

  const headRow = document.createElement("tr");
  const itemHead = document.createElement("th");
  itemHead.textContent = "項目";
  headRow.append(itemHead);

  entries.forEach(({ character }) => {
    const th = document.createElement("th");
    th.textContent = character.name;
    headRow.append(th);
  });

  table.append(headRow);

  statKeys.forEach((key) => {
    const row = document.createElement("tr");
    const itemCell = document.createElement("th");
    itemCell.textContent = statLabels[key];
    row.append(itemCell);

    const bestValue = Math.max(...entries.map(({ character }) => character.stats[key]));

    entries.forEach(({ character }) => {
      const td = document.createElement("td");
      const info = getAdvantageInfo(character.stats[key], bestValue);
      td.className = `compare-cell ${info.className}`;
      td.innerHTML = `<span class="compare-icon">${info.icon}</span> ${character.stats[key].toFixed(1)}`;
      row.append(td);
    });

    table.append(row);
  });

  tableWrap.append(table);
  return tableWrap;
}

function createComparisonCards(entries) {
  const cardWrap = document.createElement("div");
  cardWrap.className = "compare-mobile-cards";

  statKeys.forEach((key) => {
    const block = document.createElement("article");
    block.className = "compare-mobile-block";

    const title = document.createElement("h4");
    title.textContent = statLabels[key];
    block.append(title);

    const bestValue = Math.max(...entries.map(({ character }) => character.stats[key]));

    entries.forEach(({ character }) => {
      const info = getAdvantageInfo(character.stats[key], bestValue);
      const row = document.createElement("div");
      row.className = `compare-mobile-row ${info.className}`;
      row.innerHTML = `
        <span class="compare-mobile-name">${character.name}</span>
        <span class="compare-mobile-value"><span class="compare-icon">${info.icon}</span> ${character.stats[key].toFixed(1)}</span>
      `;
      block.append(row);
    });

    cardWrap.append(block);
  });

  return cardWrap;
}

function renderComparison() {
  const entries = getSelectedCharacters();

  compareTray.hidden = entries.length === 0;
  compareTrayItems.innerHTML = "";

  entries.forEach(({ index, character }) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "compare-tray-chip";
    chip.textContent = `${character.name} ×`;
    chip.addEventListener("click", () => {
      selectedCompareIndices.delete(index);
      persistCompareSelection();
      renderCharacters();
      renderComparison();
    });
    compareTrayItems.append(chip);
  });

  comparisonResults.innerHTML = "";

  if (entries.length < 2) {
    compareSummary.textContent = "2件以上選択すると差分比較が表示されます。";
    comparisonResults.innerHTML = '<p class="compare-empty">比較したいキャラを2〜3件選択してください。</p>';
    return;
  }

  compareSummary.textContent = `${entries.map(({ character }) => character.name).join(" / ")} を比較中`;
  comparisonResults.append(createComparisonTable(entries), createComparisonCards(entries));
}

function persistCompareSelection() {
  const values = Array.from(selectedCompareIndices);
  localStorage.setItem(compareStorageKey, JSON.stringify(values));

  const query = new URLSearchParams(window.location.search);
  if (values.length) {
    query.set("c", values.join(","));
  } else {
    query.delete("c");
  }

  const nextUrl = `${window.location.pathname}${query.toString() ? `?${query.toString()}` : ""}${window.location.hash}`;
  history.replaceState(null, "", nextUrl);
}

function loadCompareSelection() {
  const query = new URLSearchParams(window.location.search);
  const queryValues = query.get("c");
  let initial = [];

  if (queryValues) {
    initial = queryValues
      .split(",")
      .map((value) => Number(value))
      .filter((value) => Number.isInteger(value) && characterByIndex.has(value));
  } else {
    try {
      const stored = JSON.parse(localStorage.getItem(compareStorageKey) || "[]");
      initial = stored.filter((value) => Number.isInteger(value) && characterByIndex.has(value));
    } catch {
      initial = [];
    }
  }

  selectedCompareIndices = new Set(initial.slice(0, compareLimit));
  persistCompareSelection();
}

function shareCompareUrl() {
  const shareUrl = window.location.href;
  if (!selectedCompareIndices.size) {
    compareShareStatus.textContent = "比較対象を選んでから共有してください。";
    return;
  }

  const fallbackCopy = async () => {
    const textarea = document.createElement("textarea");
    textarea.value = shareUrl;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  (navigator.clipboard?.writeText(shareUrl) || fallbackCopy())
    .then(() => {
      compareShareStatus.textContent = "共有URLをコピーしました。";
    })
    .catch(() => {
      compareShareStatus.textContent = `共有URL: ${shareUrl}`;
    });
}

function renderCharacters() {
  const typeValue = characterTypeFilter.value;
  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;

  let filtered = characters;
  if (typeValue !== "all") {
    filtered = filtered.filter((character) => character.type === typeValue);
  }

  const sorted = sortItems(filtered, sortKey, orderValue);

  characterList.innerHTML = "";
  sorted.forEach((character) => {
    const index = characters.indexOf(character);
    characterList.append(createCharacterCard(character, index));
  });

  characterCount.textContent = `${sorted.length}件表示`;
}

function renderRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;
  const orderValue = racketOrder.value;

  let filtered = rackets;
  if (typeValue !== "all") {
    filtered = filtered.filter((racket) => racket.category === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => racket.timing === timingValue);
  }

  const sorted = sortItems(filtered, "name", orderValue);

  racketList.innerHTML = "";
  sorted.forEach((racket) => racketList.append(createRacketCard(racket)));

  racketCount.textContent = `${sorted.length}件表示`;
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

compareClear.addEventListener("click", () => {
  selectedCompareIndices.clear();
  persistCompareSelection();
  compareShareStatus.textContent = "";
  renderCharacters();
  renderComparison();
});

compareShare.addEventListener("click", shareCompareUrl);

[characterTypeFilter, characterSort, characterOrder].forEach((element) => {
  element.addEventListener("change", renderCharacters);
});

[racketTypeFilter, racketTimingFilter, racketOrder].forEach((element) => {
  element.addEventListener("change", renderRackets);
});

loadCompareSelection();
renderCharacters();
renderRackets();
renderComparison();
setupMobileSectionNav();
