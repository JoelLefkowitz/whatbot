import { parseMessage } from "../parsers/messages";
import {
    checkFailure,
    notSentByMe,
    sentByAnIndividual,
    notFromAWhitelistedSender,
} from "./conditions";
import { InletFeedback } from "./models";
import { ChatUpdate } from "./patches";

export function chatInlet(
    chatUpdate: ChatUpdate,
    whitelist: string[]
): InletFeedback {
    if (!chatUpdate.messages) {
        return { latest: null, permit: false };
    }

    const latestMessage = parseMessage(
        chatUpdate.messages.all()[0]
    );

    const inletConditions = [
        notSentByMe(latestMessage),
        sentByAnIndividual(latestMessage),
        notFromAWhitelistedSender(latestMessage, whitelist),
    ];

    return {
        latest: latestMessage,
        permit: !inletConditions.some(checkFailure),
    };
}
