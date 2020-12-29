import { getLast } from "../utils/arrays";
import { memorylessResponse } from "./replies";
import { Message } from "./abstraction";

export interface Response {
  text: string;
  recipientId: string;
}

export function memorylessResponse(messages: Message[]): Response {
  return {
    text: isProfane(getLast(messages)) ? profanityResponse() : excuseResponse(),
    recipientId: latestMessage.remoteJid,
  };
}
