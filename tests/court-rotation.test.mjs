import assert from "node:assert/strict";
import test from "node:test";

import {
  RANKED_COURT_CYCLE,
  RANKED_COURT_CYCLE_LENGTH,
  RANKED_COURT_CYCLE_MINUTES,
  getNextRankedCourtOccurrence,
  getRankedCourtNextIds,
  getRankedCourtSlot,
  getRankedCourtSlots,
} from "../js/court-rotation.js";

function jst(value) {
  return new Date(`${value}+09:00`);
}

function formatJst(date) {
  const shifted = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, "0")}-${String(shifted.getUTCDate()).padStart(2, "0")} ${String(shifted.getUTCHours()).padStart(2, "0")}:${String(shifted.getUTCMinutes()).padStart(2, "0")}`;
}

test("実測した時刻境界を30分枠へ正しく割り当てる", () => {
  assert.equal(getRankedCourtSlot(jst("2026-07-17T22:00:00")).courtId, "academy-clay");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T22:29:59")).courtId, "academy-clay");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T22:30:00")).courtId, "wonder");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T22:59:59")).courtId, "wonder");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T23:00:00")).courtId, "galaxy");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T23:29:59")).courtId, "galaxy");
  assert.equal(getRankedCourtSlot(jst("2026-07-17T23:30:00")).courtId, "stadium-grass");
});

test("17枠を8時間30分で一周する", () => {
  const expectedCycle = [
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
  ];
  const slots = getRankedCourtSlots(jst("2026-07-17T19:30:00"), expectedCycle.length);

  assert.equal(RANKED_COURT_CYCLE_LENGTH, 17);
  assert.equal(RANKED_COURT_CYCLE_MINUTES, 510);
  assert.deepEqual(RANKED_COURT_CYCLE, expectedCycle);
  assert.deepEqual(slots.map((slot) => slot.courtId), expectedCycle);
  assert.equal(getRankedCourtSlot(jst("2026-07-18T04:00:00")).courtId, "forest");
  assert.equal(getRankedCourtSlot(jst("2026-07-18T07:00:00")).courtId, "wonder");
});

test("スタジアム グラスの2枠から異なる次コートを返す", () => {
  assert.deepEqual(getRankedCourtNextIds("stadium-grass"), ["academy-wood", "stadium-clay"]);
});

test("重複コートの最も近い次回出現を選ぶ", () => {
  const atFirstSlotStart = getNextRankedCourtOccurrence("stadium-grass", jst("2026-07-17T23:30:00"));
  const afterFirstSlotStart = getNextRankedCourtOccurrence("stadium-grass", jst("2026-07-17T23:45:00"));
  const afterSecondSlotStart = getNextRankedCourtOccurrence("stadium-grass", jst("2026-07-18T02:15:00"));

  assert.equal(formatJst(atFirstSlotStart.slotStart), "2026-07-17 23:30");
  assert.equal(formatJst(afterFirstSlotStart.slotStart), "2026-07-18 02:00");
  assert.equal(formatJst(afterSecondSlotStart.slotStart), "2026-07-18 08:00");
});

test("日別枠にスタジアム グラスを2系統とも含める", () => {
  const daySlots = getRankedCourtSlots(jst("2026-07-18T00:00:00"), 48);
  const grassTimes = daySlots
    .filter((slot) => slot.courtId === "stadium-grass")
    .map((slot) => formatJst(slot.slotStart));

  assert.deepEqual(grassTimes, [
    "2026-07-18 02:00",
    "2026-07-18 08:00",
    "2026-07-18 10:30",
    "2026-07-18 16:30",
    "2026-07-18 19:00",
  ]);
});
