import { isEqual } from "lodash";

import { mockWAMessage, mockMessage } from "../services/mocks";
import { parseMessage } from "./messages";

describe("Test parseMessage", () => {
    it("mockWAMessage -> mockMessage", () => {
        expect(
            isEqual(parseMessage(mockWAMessage), mockMessage)
        ).toBeTruthy();
    });
});
