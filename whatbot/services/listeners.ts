import { checkFailure, notInConversation } from "./conditions";
import { fetchTextHistory } from "./fetchers";
import { chatInlet } from "./inlets";
import { ChatUpdate } from "./patches";
import { Reporter } from "./reporters";
import { memorylessResponse } from "./responders";
import { MessageType, WAConnection } from "@adiwajshing/baileys";

export function chatListener(
  conn: WAConnection,
  whitelist: string[],
  reporter: Reporter
) {
  return async (chatUpdate: ChatUpdate): Promise<void> => {
    const inletFeedback = chatInlet(chatUpdate, whitelist, reporter);

    if (inletFeedback.permit) {
      const recentMessages = await fetchTextHistory(
        conn,
        inletFeedback.latest.remoteJid,
        20,
        reporter
      );

      const historyConditions = [notInConversation(recentMessages)];

      if (
        !historyConditions.some((condition) =>
          checkFailure(condition, reporter)
        )
      ) {
        const response = memorylessResponse(recentMessages, reporter);

        conn.sendMessage(
          response.recipientJid,
          response.text,
          MessageType.text
        );
      }
    }
  };
}
