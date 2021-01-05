import { WAMessage, WAConnection } from "@adiwajshing/baileys";

import { parseMessage } from "../parsers/messages";
import { Message } from "./models";

export async function fetchTextHistory(
    conn: WAConnection,
    remoteJid: string,
    historyLength: number
): Promise<Message[]> {
    const messageHistory = await conn.loadMessages(
        remoteJid,
        historyLength
    );

    return messageHistory.messages
        .filter((message: WAMessage) =>
            message.message.hasOwnProperty("conversation")
        )
        .map(parseMessage);
}
