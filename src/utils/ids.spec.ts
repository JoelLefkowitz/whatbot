import { isGroupId, isSingleId } from "./ids";

describe("Test isSingleId", () => {
  it("abc -> false", () => {
    expect(isSingleId("abc")).toBe(false);
  });

  it("abc@s.whatsapp.net -> true", () => {
    expect(isSingleId("abc@s.whatsapp.net")).toBe(true);
  });

  it("abc@g.us -> false", () => {
    expect(isSingleId("abc@g.us")).toBe(false);
  });
});

describe("Test isGroupId", () => {
  it("abc -> false", () => {
    expect(isGroupId("abc")).toBe(false);
  });

  it("abc@s.whatsapp.net -> false", () => {
    expect(isGroupId("abc@s.whatsapp.net")).toBe(false);
  });

  it("abc@g.us -> true", () => {
    expect(isGroupId("abc@g.us")).toBe(true);
  });
});
