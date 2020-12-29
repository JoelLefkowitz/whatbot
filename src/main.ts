import { getArgumentParser } from "./cli";
import { getWhitelist } from "./parsers/whitelist";
import { getSession } from "./helpers/sessions";
import { chatListener } from "./helpers/listeners";

async function main(): Promise<void> {
  const argumentParser = getArgumentParser();
  const args = argumentParser.parse_args();
  const conn = getSession(args.keyfile, args.newSession);
  const whitelist = getWhitelist(args.whitelist);

  conn.on("chat-update", chatListener);
  await conn.connect();
}

if (require.main === module) {
  main();
}
