import { isEqual } from "lodash";
import mock = require("mock-fs");
import { parseWhitelist } from "./whitelist";

describe("Test parseWhitelist", () => {
  beforeEach(() => {
    mock({
      "valid.json": JSON.stringify({ name: "id" }),
      "invalid.json": JSON.stringify({ name: [1, 2, 3] }),
      "empty.json": JSON.stringify({}),
    });
  });

  afterEach(mock.restore);

  it("Valid whitelist -> parsed", () => {
    expect(
      isEqual(parseWhitelist("valid.json"), ["id@s.whatsapp.net"])
    ).toBeTruthy();
  });

  it("Invalid whitelist -> Throws error", () => {
    expect(() => parseWhitelist("invalid.json")).toThrow(
      new Error("Whitelist values must be strings")
    );
  });

  it("Empty whitelist -> Throws error", () => {
    expect(() => parseWhitelist("empty.json")).toThrow(
      new Error("Whitelist must not be empty")
    );
  });

  it("Non existent whitelist -> Throws error", () => {
    expect(() => parseWhitelist("missing.json")).toThrow(
      new Error("Whitelist not found")
    );
  });
});
