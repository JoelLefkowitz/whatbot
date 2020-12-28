import fs = require("fs");
import argparse = require("argparse");

export interface CliArgs {
  keyfile: string;
  newSession: boolean;
  whitelist: string;
}

export const getCliArgs = (): CliArgs => {
  const parser = new argparse.ArgumentParser({
    description: "Argparse example",
  });

  parser.add_argument("keyfile");
  parser.add_argument("--whitelist");
  parser.add_argument("--newSession", { action: "store_true" });
  return parser.parse_args();
};
