import { getLast } from "../utils/arrays";
import { isProfane } from "../utils/detect";
import { Message, Response } from "./models";
import { excuseReply, profaneReply } from "./replies";

export function memorylessResponse(
    messages: Message[]
): Response {
    const latestMessage = getLast(messages);
    return {
        text: isProfane(latestMessage.text)
            ? profaneReply()
            : excuseReply(),
        recipientJid: latestMessage.remoteJid,
    };
}
