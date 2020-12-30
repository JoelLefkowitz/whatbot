import { memorylessResponse } from "./responders";
import { chatInlet } from "./inlets";
import { ChatUpdate } from "../helpers/patches";
import { WAConnection, MessageType } from "@adiwajshing/baileys";

export function chatListener(conn: WAConnection, whitelist: string[]) {
  return async (chatUpdate: ChatUpdate): Promise<void> => {
    if (chatUpdate.messages) {
      const recentMessages = await chatInlet(conn, chatUpdate, 5, whitelist);
      const response = memorylessResponse(recentMessages);

      conn.sendMessage(response.recipientId, response.text, MessageType.text);
    }
  };
}
