import { WAConnection } from "@adiwajshing/baileys";

import fs = require("fs");

export function getSession(
    keyfile: string,
    newSession: boolean
): WAConnection {
    const conn = new WAConnection();

    if (newSession) {
        conn.on("credentials-updated", () => {
            fs.writeFileSync(
                keyfile,
                JSON.stringify(
                    conn.base64EncodedAuthInfo(),
                    null,
                    "\t"
                )
            );
        });
    } else {
        conn.loadAuthInfo(keyfile);
    }

    return conn;
}
