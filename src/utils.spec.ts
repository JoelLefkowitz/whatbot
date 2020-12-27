import { isEqual } from "lodash";
import { isSingleId, isGroupId, parseMessage } from "./utils";

describe("Test utils.parseMessage", () => {
  it("", () => {
    expect(
      isEqual(
        parseMessage({
          message: "abc",
          key: {
            remoteJid: "123",
            fromMe: true,
          },
        }),
        {
          id: "123",
          text: "abc",
          fromMe: true,
        }
      )
    ).toBeTruthy();
  });
});

describe("Test utils.isSingleId", () => {
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

describe("Test utils.isGroupId", () => {
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
