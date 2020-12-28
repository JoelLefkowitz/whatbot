import { Message, WAMessage } from "./abstraction";
import { isSingleId } from "./utils";
import { excuseResponse, profanityResponse, isProfane } from "./replies";
import { parseMessage } from "./utils";

export interface lazyResponse {
  permit: () => boolean;
  recipientId: string;
  text: () => string;
}

export const simpleListener = (
  messages: WAMessage[],
  whitelist: string[]
): lazyResponse => {
  const latestMessage = parseMessage(messages[0]);

  const conditions = [
    notFromMe(latestMessage),
    fromSingle(latestMessage),
    notWhitelisted(latestMessage, whitelist),
  ];

  const failedCondition = () =>
    conditions.find((i: LazyCondition) => !i.condition());

  if (failedCondition) {
    console.log("Failed condition: " + failedCondition.label);
  }

  return {
    permit: () => typeof failedCondition() == "undefined",
    recipientId: latestMessage.id,
    text: () => memorylessResponse(latestMessage.text),
  };
};
