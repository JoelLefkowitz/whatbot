import { WAMessage } from "@adiwajshing/baileys";

import Long = require("long");

export interface ChatUpdate {
  messages: {
    all: () => WAMessage[];
  };
}

export interface TextWAMessage {
  key: {
    fromMe?: boolean;
    remoteJid?: string;
  };
  message?: { conversation?: string };
  messageTimestamp?: number | Long;
}
