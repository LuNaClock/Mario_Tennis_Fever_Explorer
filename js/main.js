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
const racketOrder = document.getElementById("racket-order");

const mobileNavItems = Array.from(document.querySelectorAll(".mobile-bottom-nav__item"));
const mobileSections = mobileNavItems
  .map((item) => document.getElementById(item.dataset.target))
  .filter(Boolean);

const detailDialog = document.getElementById("detail-dialog");
const detailKind = document.getElementById("detail-kind");
const detailTitle = document.getElementById("detail-title");
const detailContent = document.getElementById("detail-content");
const detailClose = document.getElementById("detail-close");
const detailPrev = document.getElementById("detail-prev");
const detailNext = document.getElementById("detail-next");

let renderedCharacters = [];
let renderedRackets = [];
let activeDetail = null;
let listScrollY = 0;

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

function buildCharacterDetail(item) {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3>${item.name}</h3>
    <p class="badge">${item.type}</p>
  `;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = `${item.name}のアイコン`;
  image.className = "card-image";

  header.append(title, image);

  const stats = document.createElement("div");
  stats.className = "stats";
  Object.entries(item.stats).forEach(([key, value]) => {
    stats.append(createStatRow(statLabels[key], value));
  });

  fragment.append(header, stats, createAccordion("特殊能力", item.special), createAccordion("ゲーム内テキスト", item.text));
  return fragment;
}

function buildRacketDetail(item) {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3 class="racket-title">${item.name}</h3>
    <div class="badge-group badge-group--racket">
      <span class="badge">${item.category}</span>
      <span class="badge badge--soft">${item.timing}</span>
    </div>
  `;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = `${item.name}のアイコン`;
  image.className = "card-image card-image--racket";

  header.append(title, image);

  const effect = document.createElement("p");
  effect.className = "effect";
  effect.textContent = item.effect;

  fragment.append(header, effect, createAccordion("ゲーム内テキスト", item.text));
  return fragment;
}

function syncQuery(type, id, replace = true) {
  const url = new URL(window.location.href);
  if (type === "character") {
    url.searchParams.set("character", String(id));
    url.searchParams.delete("racket");
  } else if (type === "racket") {
    url.searchParams.set("racket", String(id));
    url.searchParams.delete("character");
  } else {
    url.searchParams.delete("character");
    url.searchParams.delete("racket");
  }
  if (replace) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }
}

function openDetail(type, id, options = {}) {
  const source = type === "character" ? characters : rackets;
  const item = source[id];
  if (!item || !detailDialog) {
    return;
  }

  if (!detailDialog.open) {
    listScrollY = window.scrollY;
    detailDialog.showModal();
    document.body.classList.add("is-dialog-open");
  }

  activeDetail = { type, id };
  detailKind.textContent = type === "character" ? "キャラクター詳細" : "ラケット詳細";
  detailTitle.textContent = item.name;
  detailContent.innerHTML = "";
  detailContent.append(type === "character" ? buildCharacterDetail(item) : buildRacketDetail(item));

  const rendered = type === "character" ? renderedCharacters : renderedRackets;
  const currentIndex = rendered.findIndex((entry) => entry.id === id);
  const prevEntry = currentIndex > 0 ? rendered[currentIndex - 1] : null;
  const nextEntry = currentIndex >= 0 && currentIndex < rendered.length - 1 ? rendered[currentIndex + 1] : null;

  detailPrev.disabled = !prevEntry;
  detailNext.disabled = !nextEntry;
  detailPrev.dataset.id = prevEntry ? String(prevEntry.id) : "";
  detailNext.dataset.id = nextEntry ? String(nextEntry.id) : "";

  if (!options.skipQuerySync) {
    syncQuery(type, id);
  }
}

function closeDetail(options = {}) {
  if (!detailDialog?.open) {
    return;
  }

  detailDialog.close();
  document.body.classList.remove("is-dialog-open");
  activeDetail = null;

  if (!options.skipQuerySync) {
    syncQuery(null, null);
  }

  window.scrollTo({ top: listScrollY, behavior: "auto" });
}

function createCard(type, item, id) {
  const card = document.createElement("article");
  card.className = "card card--interactive";
  card.tabIndex = 0;
  card.role = "button";
  card.setAttribute("aria-label", `${item.name}の詳細を開く`);

  const content = type === "character" ? buildCharacterDetail(item) : buildRacketDetail(item);
  card.append(content);

  const open = () => openDetail(type, id);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

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

function renderCharacters() {
  const typeValue = characterTypeFilter.value;
  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;

  let indexed = characters.map((item, id) => ({ ...item, id }));
  if (typeValue !== "all") {
    indexed = indexed.filter((character) => character.type === typeValue);
  }

  const sorted = sortItems(indexed, sortKey, orderValue);
  renderedCharacters = sorted.map(({ id, name }) => ({ id, name }));

  characterList.innerHTML = "";
  sorted.forEach((character) => characterList.append(createCard("character", character, character.id)));

  characterCount.textContent = `${sorted.length}件表示`;
}

function renderRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;
  const orderValue = racketOrder.value;

  let indexed = rackets.map((item, id) => ({ ...item, id }));
  if (typeValue !== "all") {
    indexed = indexed.filter((racket) => racket.category === typeValue);
  }
  if (timingValue !== "all") {
    indexed = indexed.filter((racket) => racket.timing === timingValue);
  }

  const sorted = sortItems(indexed, "name", orderValue);
  renderedRackets = sorted.map(({ id, name }) => ({ id, name }));

  racketList.innerHTML = "";
  sorted.forEach((racket) => racketList.append(createCard("racket", racket, racket.id)));

  racketCount.textContent = `${sorted.length}件表示`;
}

function syncActiveDetailIfNeeded() {
  if (!activeDetail) {
    return;
  }

  const rendered = activeDetail.type === "character" ? renderedCharacters : renderedRackets;
  const exists = rendered.some((item) => item.id === activeDetail.id);
  if (exists) {
    openDetail(activeDetail.type, activeDetail.id, { skipQuerySync: true });
  } else {
    closeDetail();
  }
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

function restoreDetailFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const characterId = params.get("character");
  const racketId = params.get("racket");

  if (characterId !== null) {
    const id = Number(characterId);
    if (Number.isInteger(id) && id >= 0 && id < characters.length) {
      openDetail("character", id, { skipQuerySync: true });
    }
    return;
  }

  if (racketId !== null) {
    const id = Number(racketId);
    if (Number.isInteger(id) && id >= 0 && id < rackets.length) {
      openDetail("racket", id, { skipQuerySync: true });
    }
  }
}

[characterTypeFilter, characterSort, characterOrder].forEach((element) => {
  element.addEventListener("change", () => {
    renderCharacters();
    syncActiveDetailIfNeeded();
  });
});

[racketTypeFilter, racketTimingFilter, racketOrder].forEach((element) => {
  element.addEventListener("change", () => {
    renderRackets();
    syncActiveDetailIfNeeded();
  });
});

detailClose?.addEventListener("click", () => closeDetail());

detailDialog?.addEventListener("click", (event) => {
  if (event.target === detailDialog) {
    closeDetail();
  }
});

detailDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDetail();
});

detailPrev?.addEventListener("click", () => {
  if (!activeDetail || !detailPrev.dataset.id) {
    return;
  }
  openDetail(activeDetail.type, Number(detailPrev.dataset.id));
});

detailNext?.addEventListener("click", () => {
  if (!activeDetail || !detailNext.dataset.id) {
    return;
  }
  openDetail(activeDetail.type, Number(detailNext.dataset.id));
});

window.addEventListener("popstate", () => {
  if (detailDialog?.open) {
    closeDetail({ skipQuerySync: true });
  }
  restoreDetailFromQuery();
});

renderCharacters();
renderRackets();
setupMobileSectionNav();
restoreDetailFromQuery();
