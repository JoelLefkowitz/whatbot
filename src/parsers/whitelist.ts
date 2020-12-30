import fs = require("fs");
import { allStrings } from "../utils/types";

export function parseWhitelist(path: string): string[] {
  if (!fs.existsSync(path)) {
    throw "Whitelist not found";
  }

  const whitelist = JSON.parse(fs.readFileSync(path, "utf8"));

  if (Object.keys(whitelist).length === 0) {
    throw "Whitelist must not be empty";
  }

  if (!allStrings(Object.values(whitelist))) {
    throw "Whitelist values must be strings";
  }

  return Object.values(whitelist).map((i: string) => i + "@s.whatsapp.net");
}
