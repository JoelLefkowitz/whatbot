import { isProfane } from "./detect";

describe("Test isProfane", () => {
  it("'' -> false", () => {
    expect(isProfane("")).toBe(false);
  });

  it("abc -> false", () => {
    expect(isProfane("abc")).toBe(false);
  });

  it("aBc fUcK -> true", () => {
    expect(isProfane("aBc fUcK")).toBe(true);
  });
});
