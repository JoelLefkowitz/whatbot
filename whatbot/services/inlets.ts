import { parseMessage } from "../parsers/messages";
import { Reporter } from "../services/reporters";
import {
  checkFailure,
  notFromAWhitelistedSender,
  notSentByMe,
  sentByAnIndividual,
} from "./conditions";
import { InletFeedback } from "./models";
import { ChatUpdate } from "./patches";

export function chatInlet(
  chatUpdate: ChatUpdate,
  whitelist: string[],
  reporter: Reporter
): InletFeedback {
  if (!chatUpdate.messages) {
    return { latest: null, permit: false };
  }

  const latestMessage = parseMessage(chatUpdate.messages.all()[0]);

  reporter.event("Message observed", latestMessage.text);
  const inletConditions = [
    notSentByMe(latestMessage),
    sentByAnIndividual(latestMessage),
    notFromAWhitelistedSender(latestMessage, whitelist),
  ];

  return {
    latest: latestMessage,
    permit: !inletConditions.some((condition) =>
      checkFailure(condition, reporter)
    ),
  };
}
