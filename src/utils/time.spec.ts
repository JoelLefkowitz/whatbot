import Long = require("long");
import { hoursSince, parseDate } from "./time";

describe("Test parseDate", () => {
  xit("Long 0 -> 1970", () => {
    expect(parseDate(new Long(0))).toBe(new Date("1970-01-01T00:00:00.000Z"));
  });

  xit("number 0 -> 1970", () => {
    expect(parseDate(0)).toBe(new Date("1970-01-01T00:00:00.000Z"));
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
