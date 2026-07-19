export const RANKED_COURT_SLOT_MINUTES = 30;

export const RANKED_COURT_CYCLE = Object.freeze([
  "forest",
  "academy-grass",
  "academy-carpet",
  "pinball",
  "academy-hard",
  "academy-clay",
  "wonder",
  "galaxy",
  "stadium-grass",
  "academy-wood",
  "airship",
  "stadium-hard",
  "academy-block",
  "stadium-grass",
  "stadium-clay",
  "racket-factory",
  "academy-sand",
]);

export const RANKED_COURT_CYCLE_LENGTH = RANKED_COURT_CYCLE.length;
export const RANKED_COURT_CYCLE_MINUTES = RANKED_COURT_SLOT_MINUTES * RANKED_COURT_CYCLE_LENGTH;
export const RANKED_COURT_CYCLE_ANCHOR_JST = new Date(Date.UTC(2026, 6, 17, 13, 30, 0));
export const RANKED_COURT_CYCLE_ANCHOR_INDEX = RANKED_COURT_CYCLE.indexOf("wonder");

const SLOT_MS = RANKED_COURT_SLOT_MINUTES * 60 * 1000;

function mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function toTimestamp(date) {
  const timestamp = date instanceof Date ? date.getTime() : new Date(date).getTime();
  if (!Number.isFinite(timestamp)) {
    throw new TypeError("A valid date is required for ranked court rotation calculations.");
  }
  return timestamp;
}

export function getRankedCourtSlot(date) {
  const timestamp = toTimestamp(date);
  const anchorTimestamp = RANKED_COURT_CYCLE_ANCHOR_JST.getTime();
  const slotNumber = Math.floor((timestamp - anchorTimestamp) / SLOT_MS);
  const cycleIndex = mod(RANKED_COURT_CYCLE_ANCHOR_INDEX + slotNumber, RANKED_COURT_CYCLE_LENGTH);
  const slotStart = new Date(anchorTimestamp + slotNumber * SLOT_MS);

  return {
    date: new Date(timestamp),
    minutesSinceAnchor: Math.floor((timestamp - anchorTimestamp) / 60000),
    slotNumber,
    cycleIndex,
    slotStart,
    slotEnd: new Date(slotStart.getTime() + SLOT_MS),
    courtId: RANKED_COURT_CYCLE[cycleIndex],
  };
}

export function getRankedCourtSlots(startDate, count) {
  const startTimestamp = toTimestamp(startDate);
  const slotCount = Math.max(0, Math.floor(Number(count) || 0));

  return Array.from({ length: slotCount }, (_, index) => (
    getRankedCourtSlot(new Date(startTimestamp + index * SLOT_MS))
  ));
}

export function getRankedCourtCycleIndexes(courtId) {
  const indexes = [];
  RANKED_COURT_CYCLE.forEach((candidateId, index) => {
    if (candidateId === courtId) indexes.push(index);
  });
  return indexes;
}

export function getRankedCourtNextIds(courtId) {
  const nextIds = getRankedCourtCycleIndexes(courtId)
    .map((index) => RANKED_COURT_CYCLE[(index + 1) % RANKED_COURT_CYCLE_LENGTH]);
  return [...new Set(nextIds)];
}

export function getNextRankedCourtOccurrence(courtId, fromDate) {
  const targetIndexes = getRankedCourtCycleIndexes(courtId);
  if (!targetIndexes.length) return null;

  const timestamp = toTimestamp(fromDate);
  const current = getRankedCourtSlot(new Date(timestamp));
  const isAfterSlotStart = timestamp > current.slotStart.getTime();
  const candidates = targetIndexes.map((cycleIndex) => {
    let offsetSlots = mod(cycleIndex - current.cycleIndex, RANKED_COURT_CYCLE_LENGTH);
    if (offsetSlots === 0 && isAfterSlotStart) {
      offsetSlots = RANKED_COURT_CYCLE_LENGTH;
    }
    return { cycleIndex, offsetSlots };
  });
  candidates.sort((left, right) => left.offsetSlots - right.offsetSlots || left.cycleIndex - right.cycleIndex);

  const next = candidates[0];
  const slotStart = new Date(current.slotStart.getTime() + next.offsetSlots * SLOT_MS);
  return {
    courtId,
    cycleIndex: next.cycleIndex,
    offsetSlots: next.offsetSlots,
    slotStart,
    slotEnd: new Date(slotStart.getTime() + SLOT_MS),
  };
}
