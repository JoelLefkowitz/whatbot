import { PartialWAMessage, Message } from "../helpers/abstraction";
import { dateFromLong } from "../utils/time";

export function parseMessage(message: PartialWAMessage): Message {
  return {
    text: message["message"]["conversation"],
    fromMe: message["key"]["fromMe"],
    remoteJId: message["key"]["remoteJid"],
    timestamp: dateFromLong(message["messageTimestamp"]),
  };
}
