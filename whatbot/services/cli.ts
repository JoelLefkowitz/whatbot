import { defaultToNull } from "../utils/types";

import argparse = require("argparse");

export interface CliArgs {
  keyfile: string;
  whitelist: string | null;
  newSession: boolean;
  logfile: string | null;
}

export function parse_args(): CliArgs {
  let parser = new argparse.ArgumentParser({
    description: "Argparse example",
  });

  parser.add_argument("keyfile");
  parser.add_argument("--whitelist");
  parser.add_argument("--logfile");
  parser.add_argument("--newSession", {
    action: "store_true",
  });

  const cliArgs = parser.parse_args();

  return {
    keyfile: cliArgs.keyfile,
    whitelist: defaultToNull(cliArgs.whitelist),
    newSession: cliArgs.newSession,
    logfile: defaultToNull(cliArgs.logfile),
  };
}
