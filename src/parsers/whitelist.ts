import { allStrings } from "../utils/types";

export function parseWhitelist(path: string): string[] {
  const whitelist = JSON.parse(fs.readFileSync(path, "utf8"));

  if (!allStrings(Object.values(whitelist))) {
    throw "Whitelist values must be strings";
  }

  return Object.values(whitelist).map((i: string) => i + "@s.whatsapp.net");
}
