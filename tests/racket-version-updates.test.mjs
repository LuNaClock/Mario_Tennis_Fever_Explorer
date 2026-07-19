import test from "node:test";
import assert from "node:assert/strict";

import { changelog, rackets } from "../data.js";

const expectedItemCounts = new Map([
  ["マメキノコラケット", 1],
  ["アイスフラワーラケット", 2],
  ["スターラケット", 1],
  ["キラーラケット", 1],
  ["フリーズラケット", 1],
  ["ビリキューラケット", 1],
  ["メタルラケット", 2],
  ["ハテナラケット", 1],
]);

test("Ver. 1.1.0 racket updates match the eight affected rackets", () => {
  const updateEntries = changelog.filter((entry) => entry.version === "1.1.0");
  assert.equal(updateEntries.length, 1);

  const racketNames = new Set(rackets.map((racket) => racket.name.ja));
  const updateGroups = updateEntries[0].sections
    .flatMap((section) => section.groups ?? [])
    .filter((group) => racketNames.has(group.name.ja));

  assert.deepEqual(
    updateGroups.map((group) => group.name.ja),
    [...expectedItemCounts.keys()],
  );

  updateGroups.forEach((group) => {
    assert.equal(group.items.length, expectedItemCounts.get(group.name.ja));
    group.items.forEach((item) => {
      assert.ok(item.ja?.trim(), group.name.ja + " is missing Japanese update text");
      assert.ok(item.en?.trim(), group.name.ja + " is missing English update text");
    });
  });

  assert.ok(!updateGroups.some((group) => group.name.ja === "ブラックホールラケット"));
});
