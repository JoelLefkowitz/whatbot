import { WAConnection, MessageType } from "@adiwajshing/baileys";

import { checkFailure, notInConversation } from "./conditions";
import { fetchTextHistory } from "./fetchers";
import { chatInlet } from "./inlets";
import { ChatUpdate } from "./patches";
import { memorylessResponse } from "./responders";

export function chatListener(
    conn: WAConnection,
    whitelist: string[]
) {
    return async (chatUpdate: ChatUpdate): Promise<void> => {
        const inletFeedback = chatInlet(chatUpdate, whitelist);

        if (inletFeedback.permit) {
            const recentMessages = await fetchTextHistory(
                conn,
                inletFeedback.latest.remoteJid,
                20
            );

            const historyConditions = [
                notInConversation(recentMessages),
            ];

            if (!historyConditions.some(checkFailure)) {
                const response = memorylessResponse(
                    recentMessages
                );

                conn.sendMessage(
                    response.recipientJid,
                    response.text,
                    MessageType.text
                );
            }
        }
    };
}
