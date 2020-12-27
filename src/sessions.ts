import fs = require("fs");
import { WAConnection } from "@adiwajshing/baileys";

export const newSession = (keyfile: string): WAConnection => {
  const conn = new WAConnection();
  conn.on("credentials-updated", () => {
    console.log(`credentials updated!`);
    const authInfo = conn.base64EncodedAuthInfo();
    fs.writeFileSync(keyfile, JSON.stringify(authInfo, null, "\t"));
  });
  return conn;
};

export const loadSession = (keyfile: string): WAConnection => {
  const conn = new WAConnection();
  conn.loadAuthInfo(keyfile);
  return conn;
};
