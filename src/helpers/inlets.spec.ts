import { chatInlet } from "./inlets";

xdescribe("Test chatInlet", () => {
  it("[] -> {}", () => {
    expect(chatInlet()).toBe();
  });
});
