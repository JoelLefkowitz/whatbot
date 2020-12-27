import { Message } from "./abstraction";
import { isSingleId } from "./utils";
import { excuseResponse, profanityResponse, isProfane } from "./replies";

export interface ChatResponse {
  text: string;
  permit: boolean;
  recipientId: string;
}

export const simpleListener = (
  message: Message,
  whitelist: string[]
): ChatResponse => {
  const isWhitelisted = whitelist.includes(message.id);
  const isIndividual = !message.fromMe && isSingleId(message.id);

  return {
    text: isProfane(message.text) ? profanityResponse() : excuseResponse(),
    permit: isIndividual && !isWhitelisted,
    recipientId: message.id,
  };
};
