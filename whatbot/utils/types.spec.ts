import { allStrings } from "./types";

describe("Test allStrings", () => {
  it("['a', 'b'] -> true", () => {
    expect(allStrings(["a", "b"])).toBe(true);
  });

  it("[1, 2, 3] -> false", () => {
    expect(allStrings([1, 2, 3])).toBe(false);
  });

  it("[] -> true", () => {
    expect(allStrings([])).toBe(true);
  });
});
