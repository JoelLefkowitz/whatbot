import Long = require("long");

export const mockWAMessage = {
  message: { conversation: "abc" },
  key: {
    remoteJid: "123",
    fromMe: true,
  },
  messageTimestamp: new Long(0),
};

export const mockMessage = {
  text: "abc",
  fromMe: true,
  remoteJid: "123",
  timestamp: new Date(0),
};
