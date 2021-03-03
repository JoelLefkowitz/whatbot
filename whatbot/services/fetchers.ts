import { parseMessage } from "../parsers/messages";
import { Message } from "./models";
import { Reporter } from "./reporters";
import { WAConnection, WAMessage } from "@adiwajshing/baileys";

export async function fetchTextHistory(
  conn: WAConnection,
  remoteJid: string,
  historyLength: number,
  reporter: Reporter
): Promise<Message[]> {
  const messageHistory = await conn.loadMessages(remoteJid, historyLength);

  const textHistory = messageHistory.messages
    .filter((message: WAMessage) =>
      message.message.hasOwnProperty("conversation")
    )
    .map(parseMessage);

  reporter.event("History loaded", `Loaded ${textHistory.length} messages`);
  return textHistory;
}
