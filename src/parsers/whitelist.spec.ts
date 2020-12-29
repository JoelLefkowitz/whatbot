import { fs } from "memfs";
import { parseWhitelist } from "./whitelist";

describe("Test parseWhitelist", () => {
  it("Valid whitelist -> parsed", () => {
    fs.writeFileSync("whitelist.json", { name: "id" });
    expect(parseWhitelist("whitelist.json").toBe(["id"]));
  });

  it("Invalid whitelist -> Throws error", () => {
    fs.writeFileSync("whitelist.json", { name: [1, 2, 3] });
    expect(parseWhitelist("whitelist.json").toThrow(new Error("")));
  });

  it("Empty whitelist -> Throws error", () => {
    fs.writeFileSync("whitelist.json", {});
    expect(parseWhitelist("whitelist.json").toThrow(new Error("")));
  });

  it("Non existent whitelist -> Throws error", () => {
    expect(parseWhitelist("whitelist.json").toThrow(new Error("")));
  });
});
