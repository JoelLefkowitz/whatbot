import argparse = require("argparse");

export type ArgumentParser = argparse.ArgumentParser;

export function getArgumentParser(): ArgumentParser {
  const parser = new ArgumentParser({
    description: "Argparse example",
  });

  parser.add_argument("keyfile");
  parser.add_argument("--whitelist");
  parser.add_argument("--newSession", { action: "store_true" });

  return parser;
}
