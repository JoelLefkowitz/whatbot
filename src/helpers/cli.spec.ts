import { isEqual } from "lodash";
import { getArgumentParser } from "./cli";

xdescribe("Test getArgumentParser", () => {
  beforeEach(() => {
    parser = getArgumentParser();
  });

  it("[] -> {}", () => {
    process.argv = [];
    expect(isEqual(parser.parse_args(), {})).toBeTruthy();
  });
});
