import { mockWAMessage, mockMessage } from "../services/mocks";
import { parseMessage } from "./messages";
import { isEqual } from "lodash";

describe("Test parseMessage", () => {
  it("mockWAMessage -> mockMessage", () => {
    expect(isEqual(parseMessage(mockWAMessage), mockMessage)).toBeTruthy();
  });
});
