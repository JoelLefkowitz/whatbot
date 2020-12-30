import { getLast } from "../utils/arrays";
import { Message, Response } from "../helpers/models";
import { excuseReply, profaneReply, isProfane } from "./replies";

export function memorylessResponse(messages: Message[]): Response {
  const latestMessage = getLast(messages);
  return {
    text: isProfane(latestMessage.text) ? profaneReply() : excuseReply(),
    recipientId: latestMessage.remoteJid,
  };
}
