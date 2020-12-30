import { getLast } from "./arrays";

describe("Test getLast", () => {
  it("[1, 2, 3] -> 3", () => {
    expect(getLast([1, 2, 3])).toBe(3);
  });

  it("[] -> Throws error", () => {
    expect(() => getLast([])).toThrow(
      new Error("Cannot get last element of an empty array")
    );
  });
});
