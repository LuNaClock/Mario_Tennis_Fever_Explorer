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

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketSort = document.getElementById("racket-sort");
const racketOrder = document.getElementById("racket-order");

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
    <h3>${racket.name}</h3>
    <div class="badge-group">
      <span class="badge">${racket.category}</span>
      <span class="badge badge--soft">${racket.timing}</span>
    </div>
  `;

  const image = document.createElement("img");
  image.src = racket.image;
  image.alt = `${racket.name}のアイコン`;
  image.loading = "lazy";
  image.className = "card-image";

  header.append(title, image);

  const effect = document.createElement("p");
  effect.className = "effect";
  effect.textContent = racket.effect;

  const stats = document.createElement("div");
  stats.className = "stats";
  Object.entries(racket.stats).forEach(([key, value]) => {
    stats.append(createStatRow(statLabels[key], value));
  });

  const text = createAccordion("ゲーム内テキスト", racket.text);

  card.append(header, effect, stats, text);
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
  sorted.forEach((character) => characterList.append(createCharacterCard(character)));

  characterCount.textContent = `${sorted.length}件表示`;
}

function renderRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;
  const sortKey = racketSort.value;
  const orderValue = racketOrder.value;

  let filtered = rackets;
  if (typeValue !== "all") {
    filtered = filtered.filter((racket) => racket.category === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => racket.timing === timingValue);
  }

  const sorted = sortItems(filtered, sortKey, orderValue);

  racketList.innerHTML = "";
  sorted.forEach((racket) => racketList.append(createRacketCard(racket)));

  racketCount.textContent = `${sorted.length}件表示`;
}

[characterTypeFilter, characterSort, characterOrder].forEach((element) => {
  element.addEventListener("change", renderCharacters);
});

[racketTypeFilter, racketTimingFilter, racketSort, racketOrder].forEach((element) => {
  element.addEventListener("change", renderRackets);
});

renderCharacters();
renderRackets();
