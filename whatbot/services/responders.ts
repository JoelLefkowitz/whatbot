import { Reporter } from "../services/reporters";
import { getLast } from "../utils/arrays";
import { isProfane } from "../utils/detect";
import { Message, Response } from "./models";
import { excuseReply, profaneReply } from "./replies";

export function memorylessResponse(
  messages: Message[],
  reporter: Reporter
): Response {
  const latestMessage = getLast(messages);
  const responseText = isProfane(latestMessage.text)
    ? profaneReply()
    : excuseReply();

  reporter.event("Memoryless response created", responseText);
  return {
    text: responseText,
    recipientJid: latestMessage.remoteJid,
  };
}
