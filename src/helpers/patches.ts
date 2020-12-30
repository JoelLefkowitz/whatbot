import Long = require("long");
import { WAMessage } from "@adiwajshing/baileys";

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
