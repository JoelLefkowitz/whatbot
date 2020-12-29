import { Message } from "./abstraction";
import { isSingleId } from "../utils/ids";
import { hoursSince } from "../utils/time";

export interface LazyCondition {
  label: string;
  condition: () => boolean;
}

export function checkFailure(x: LazyCondition): boolean {
  const isFail = !x.condition();
  console.log([x.label, "->", isFail ? "Failed" : "Passed"].join(" "));
  return isFail;
}

export function sentByAnIndividual(message: Message): LazyCondition {
  return {
    label: "The message was sent by an individual",
    condition: (): boolean => !message.fromMe && isSingleId(message.remoteId),
  };
}

export function notFromAWhitelistedSender(
  message: Message,
  whitelist: string[]
): LazyCondition {
  return {
    label: "The message was not from a whitelisted sender",
    condition: (): boolean => !whitelist.includes(message.remoteId),
  };
}

export function fromAnKnownSender(messages: Message[]): LazyCondition {
  return {
    label: "The message was from a sender that has once been replied to",
    condition: (): boolean => {
      const latestReplyFromMe = messages.find(
        (message: Message) => message.fromMe
      );
      return typeof latestReplyFromMe != "undefined";
    },
  };
}

export function fromAColdSender(messages: Message[]): LazyCondition {
  return {
    label:
      "The message was from a sender that hasn't been replied to in the last hour",
    condition: (): boolean => {
      const latestReplyFromMe = messages.find(
        (message: Message) => message.fromMe
      );
      return (
        typeof latestReplyFromMe == "undefined" ||
        hoursSince(latestReplyFromMe.timestamp) > 1
      );
    },
  };
}
