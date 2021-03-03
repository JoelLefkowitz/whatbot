import { Message } from "../services/models";
import { TextWAMessage } from "../services/patches";
import { parseDate } from "../utils/time";

export function parseMessage(message: TextWAMessage): Message {
  return {
    text: message["message"]["conversation"],
    fromMe: message["key"]["fromMe"],
    remoteJid: message["key"]["remoteJid"],
    timestamp: parseDate(message["messageTimestamp"]),
  };
}
