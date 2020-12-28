import { parseMessage } from "./messages";

describe("Test parseMessage", () => {
  const dateNow = Date.now();

  const mockWAMessage = {
    message: { conversation: "abc" },
    key: {
      remoteJid: "123",
      fromMe: true,
    },
    messageTimestamp: {
      low: dateNow / 1000,
    },
  };

  const mockMessage = {
    id: "123",
    text: "abc",
    fromMe: true,
    timestamp: new Date(dateNow),
  };

  it("mockWAMessage -> mockMessage", () => {
    expect(isEqual(parseMessage(mockWAMessage), mockMessage)).toBeTruthy();
  });
});
