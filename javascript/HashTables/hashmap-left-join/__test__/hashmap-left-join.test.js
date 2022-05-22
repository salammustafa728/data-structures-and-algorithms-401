
const leftJoin = require("../hashmap-left-join");

const hashMap1 = [
  ["fond", "enamored"],
  ["wrath", "anger"],
  ["guide", "grab"],
  ["diligent", "employed"],
  ["flow", "usher"],
];

const hashMap2 = [
  ["fond", "averse"],
  ["wrath", "delight"],
  ["diligent", "idle"],
  ["guide", "follow"],
  ["outfit", "usher"],
];

describe("Test leftJoin  ", () => {
  it("should successfully left join two hash map and all the values in the first hashmap are returned, and if values exist in the “right” hashmap", () => {
    let result = leftJoin(hashMap1, hashMap2);
    expect(result).toEqual([
      ["fond", "enamored", "averse"],
      ["wrath", "anger", "delight"],
      ["guide", "grab", "follow"],
      ["diligent", "employed", "idle"],
      ["flow", "usher", null],
    ]);
  });
});
