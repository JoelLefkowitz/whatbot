import { getCliArgs, parseWhitelist } from "./cli";
import { loadSession, newSession } from "./sessions";
import { simpleListener } from "./listeners";
import { ChatUpdate } from "./abstraction";
import { MessageType } from "@adiwajshing/baileys";

async function main() {
  const args = getCliArgs();

  const conn = args.newSession
    ? newSession(args.keyfile)
    : loadSession(args.keyfile);

  const whitelist = args.whitelist ? parseWhitelist(args.whitelist) : [];

  conn.on("chat-update", (chatUpdate: ChatUpdate) => {
    if (chatUpdate.messages) {
      const lazyResponse = simpleListener(chatUpdate.messages.all(), whitelist);

      if (reply.permit()) {
        conn.sendMessage(
          lazyResponse.recipientId,
          lazyResponse.text(),
          MessageType.text
        );
      }
    }
  });

  await conn.connect();
}
