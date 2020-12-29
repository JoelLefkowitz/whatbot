import Long = require("long");
import { hoursSince, dateFromLong } from "./time";

describe("Test dateFromLong", () => {
  it("0 -> 1970", () => {
    expect(dateFromLong(new Long(0))).toBe(
      new Date("2000-01-01T00:00:00.000Z")
    );
  });
});

describe("Test hoursSince", () => {
  it("now -> 0", () => {
    expect(hoursSince(new Date())).toBeCloseTo(0, 1);
  });

  it("-1 hour -> 1", () => {
    const minusHour = new Date(Date.now() - 1000 * 60 * 60);
    expect(hoursSince(minusHour)).toBeCloseTo(1, 1);
  });
});
