import argparse = require("argparse");

export function getArgumentParser(): argparse.ArgumentParser {
    const parser = new argparse.ArgumentParser({
        description: "Argparse example",
    });

    parser.add_argument("keyfile");
    parser.add_argument("--whitelist");
    parser.add_argument("--newSession", {
        action: "store_true",
    });

    return parser;
}
