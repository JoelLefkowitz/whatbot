import { parseMessage, isSingleId } from "./utils";
import { getReply } from "./replies";
import { ChatUpdate } from "./abstraction";
import { MessageType } from "@adiwajshing/baileys";
import { loadSession, newSession } from "./sessions";
import argparse = require("argparse");

export const listen = async (keyfile: string): Promise<void> => {
  const conn = await loadSession(keyfile);

  conn.on("chat-update", (chatUpdate: ChatUpdate) => {
    if (chatUpdate.messages) {
      const latest = chatUpdate.messages.all()[0];
      const message = parseMessage(latest);

      if (!message.fromMe && isSingleId(message.id)) {
        conn.sendMessage(message.id, getReply(message.text), MessageType.text);
      }
    }
  });

  await conn.connect();
};

export const startNew = async (keyfile: string): Promise<void> => {
  const conn = await newSession(keyfile);
  await conn.connect();
};

export const getParser = (): argparse.ArgumentParser => {
  const parser = new argparse.ArgumentParser({
    description: "Argparse example",
  });

  parser.add_argument("keyfile");
  parser.add_argument("--new", { action: "store_true" });
  return parser;
};

const args = getParser().parse_args();
args.new ? startNew(args.keyfile) : listen(args.keyfile);
