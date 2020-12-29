import { isEqual } from "lodash";
import { parseMessage } from "./messages";
import Long = require("long");

describe("Test parseMessage", () => {
  const mockWAMessage = {
    message: { conversation: "abc" },
    key: {
      remoteJid: "123",
      fromMe: true,
    },
    messageTimestamp: new Long(0),
  };

  const mockMessage = {
    remoteId: "123",
    text: "abc",
    fromMe: true,
    timestamp: new Date("2000-01-01T00:00:00.000Z"),
  };

  it("mockWAMessage -> mockMessage", () => {
    expect(isEqual(parseMessage(mockWAMessage), mockMessage)).toBeTruthy();
  });
});
