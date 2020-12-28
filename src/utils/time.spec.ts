import { hoursSince } from "./time";

describe("Test hoursSince", () => {
  it("now -> 0", () => {
    expect(hoursSince(new Date())).toBeCloseTo(0, 2);
  });

  it("-1 hour -> 1", () => {
    const minusHour = new Date(Date.now() - 1000 * 60 * 60);
    expect(hoursSince(minusHour)).toBeCloseTo(1, 2);
  });
});
