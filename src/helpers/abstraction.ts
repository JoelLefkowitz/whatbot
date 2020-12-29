import { WAMessage } from "@adiwajshing/baileys";

export type PartialWAMessage = Pick<
  WAMessage,
  "key" | "message" | "messageTimestamp"
>;

export interface ChatUpdate {
  messages: {
    all: () => WAMessage[];
  };
}

export interface Message {
  text: string;
  fromMe: boolean;
  remoteJid: string;
  timestamp: Date;
}
