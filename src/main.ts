import { parseMessage, isSingleId } from "./utils";
import { getReply } from "./replies";
import { ChatUpdate } from "./abstraction";
import { WAConnection, MessageType } from "@adiwajshing/baileys";

export const respond = async (): Promise<void> => {
  const conn = new WAConnection();

  conn.on("chat-update", (chatUpdate: ChatUpdate) => {
    const latest = chatUpdate.messages.all()[0];
    const message = parseMessage(latest);

    if (!message.fromMe && isSingleId(message.id)) {
      conn.sendMessage(message.id, getReply(message.text), MessageType.text);
    }
  });

  await conn.connect();
};

respond();
