import { parseWhitelist } from "./parsers/whitelist";
import { parse_args } from "./services/cli";
import { chatListener } from "./services/listeners";
import { Reporter } from "./services/reporters";
import { getSession } from "./services/sessions";

async function main(): Promise<void> {
  const cliArgs = parse_args();
  const conn = getSession(cliArgs.keyfile, cliArgs.newSession);
  const reporter = new Reporter(cliArgs.logfile);

  conn.on(
    "chat-update",
    chatListener(conn, parseWhitelist(cliArgs.whitelist), reporter)
  );
  await conn.connect();
}

if (require.main === module) {
  main();
}
