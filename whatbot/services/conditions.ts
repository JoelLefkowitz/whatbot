import { LazyCondition, Message } from "./models";

import { Reporter } from "./reporters";
import { hoursSince } from "../utils/time";
import { isSingleId } from "../utils/ids";

export function checkFailure(x: LazyCondition, reporter: Reporter): boolean {
    const passed = x.condition();
    reporter.boolean(x.label, passed);
    return !passed;
}

export function notSentByMe(message: Message): LazyCondition {
    return {
        label: "The message was not sent by me",
        condition: (): boolean => !message.fromMe,
    };
}

export function sentByAnIndividual(
    message: Message
): LazyCondition {
    return {
        label: "The message was sent by an individual",
        condition: (): boolean => isSingleId(message.remoteJid),
    };
}

export function notFromAWhitelistedSender(
    message: Message,
    whitelist: string[]
): LazyCondition {
    return {
        label: "The message was not from a whitelisted sender",
        condition: (): boolean =>
            !whitelist.includes(message.remoteJid),
    };
}

export function notInConversation(
    messages: Message[]
): LazyCondition {
    return {
        label:
            "The message was not from a sender that has recently been replied to",
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
