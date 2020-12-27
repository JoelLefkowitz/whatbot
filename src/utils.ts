import { WAMessage, Message } from "./abstraction";

export const parseMessage = (message: WAMessage): Message => ({
  id: message["key"]["remoteJid"],
  text: message["message"]["conversation"],
  fromMe: message["key"]["fromMe"],
});

export const isSingleId = (id: string): boolean =>
  id.endsWith("@s.whatsapp.net");

export const isGroupId = (id: string): boolean => id.endsWith("@g.us");
