import {
  checkFailure,
  sentByAnIndividual,
  notFromAWhitelistedSender,
  fromAKnownSender,
  fromAColdSender,
} from "./conditions";
import { WAMessage } from "@adiwajshing/baileys";
import { Message } from "../helpers/models";
import { parseMessage } from "../parsers/messages";
import { ChatUpdate } from "../helpers/patches";
import { WAConnection } from "@adiwajshing/baileys";

export async function chatInlet(
  conn: WAConnection,
  chatUpdate: ChatUpdate,
  historyLength: number,
  whitelist: string[]
): Promise<Message[]> {
  const latestMessage = parseMessage(chatUpdate.messages.all()[0]);

  if (latestMessage.fromMe) {
    console.log("");
  }

  console.log("Conversation with: ".concat(latestMessage.remoteJid));
  console.log("Message text: ".concat(latestMessage.text));

  const messageHistory = (
    await conn.loadMessages(latestMessage.remoteJid, historyLength)
  ).messages
    .filter((message: WAMessage) => message.hasOwnProperty("conversation"))
    .map(parseMessage);

  console.log(
    "Fetched chat history: ".concat(
      messageHistory.length.toString(),
      " (max = ",
      historyLength.toString(),
      ")"
    )
  );

  const conditions = [
    sentByAnIndividual(latestMessage),
    notFromAWhitelistedSender(latestMessage, whitelist),
    fromAKnownSender(messageHistory),
    fromAColdSender(messageHistory),
  ];

  !conditions.some(checkFailure);

  return messageHistory;
}
