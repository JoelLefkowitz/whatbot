import {
  checkFailure,
  sentByAnIndividual,
  notFromAWhitelistedSender,
  fromAKnownSender,
  fromAColdSender,
} from "./conditions";
import { WAMessage } from "@adiwajshing/baileys";
import { Message } from "./abstraction";
import { parseMessage } from "../parsers/messages";
import { ChatUpdate } from "./abstraction";
import { WAConnection } from "@adiwajshing/baileys";

export async function chatInlet(
  conn: WAConnection,
  chatUpdate: ChatUpdate,
  historyLength: number
): Promise<Message[]> {
  const latestMessage = parseMessage(chatUpdate.messages.all()[0]);

  const conditions = [
    sentByAnIndividual(latestMessage),
    notFromAWhitelistedSender(latestMessage, whitelist),
    fromAKnownSender(messages),
    fromAColdSender(messages),
  ];

  permit: () => !conditions.some(checkFailure);

  if (latestMessage.fromMe) {
    console.log("");
  }

  console.log("Conversation with: ".concat(latestMessage.remoteId));
  console.log("Message text: ".concat(latestMessage.text));

  const messageHistory = await conn.loadMessages(
    latestMessage.remoteId,
    historyLength
  );

  console.log(
    "Fetched chat history: ".concat(
      messageHistory.messages.length.toString(),
      " (max = ",
      historyLength.toString(),
      ")"
    )
  );

  const textMessages = messageHistory.messages
    .filter((message: WAMessage) =>
      message.message.hasOwnProperty("conversation")
    )
    .map((message: WAMessage) => parseMessage(message));

  console.log("");

  return textMessages;
}
