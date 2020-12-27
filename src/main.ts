import { getCliArgs, whitelistParser } from "./cli";
import { parseMessage } from "./utils";
import { loadSession, newSession } from "./sessions";
import { simpleListener } from "./listeners";
import { ChatUpdate } from "./abstraction";
import { MessageType } from "@adiwajshing/baileys";

const main = async () => {
  const args = getCliArgs();

  const conn = args.newSession
    ? newSession(args.keyfile)
    : loadSession(args.keyfile);

  const whitelist = args.whitelist ? whitelistParser(args.whitelist) : [];

  conn.on("chat-update", (chatUpdate: ChatUpdate) => {
    if (chatUpdate.messages) {
      const latest = chatUpdate.messages.all()[0];
      const message = parseMessage(latest);
      const reply = simpleListener(message, whitelist);

      if (reply.permit) {
        conn.sendMessage(reply.recipientId, reply.text, MessageType.text);
      }
    }
  });

  await conn.connect();
};

main().catch((err) => {
  console.error(err);
});
