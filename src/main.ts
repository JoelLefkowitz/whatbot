import { parseWhitelist } from "./parsers/whitelist";
import { getArgumentParser } from "./services/cli";
import { chatListener } from "./services/listeners";
import { getSession } from "./services/sessions";

async function main(): Promise<void> {
    const argumentParser = getArgumentParser();
    const args = argumentParser.parse_args();
    const conn = getSession(args.keyfile, args.newSession);
    const whitelist = parseWhitelist(args.whitelist);

    conn.on("chat-update", chatListener(conn, whitelist));
    await conn.connect();
}

if (require.main === module) {
    main();
}
