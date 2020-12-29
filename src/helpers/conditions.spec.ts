import {
  checkFailure,
  sentByAnIndividual,
  notFromAWhitelistedSender,
  fromAnKnownSender,
  fromAColdSender,
} from "./conditions";

xdescribe("Test checkFailure", () => {
  it("[] -> {}", () => {
    expect(checkFailure()).toBe();
  });
});

xdescribe("Test sentByAnIndividual", () => {
  it("[] -> {}", () => {
    expect(sentByAnIndividual()).toBe();
  });
});

xdescribe("Test notFromAWhitelistedSender", () => {
  it("[] -> {}", () => {
    expect(notFromAWhitelistedSender()).toBe();
  });
});

xdescribe("Test fromAnKnownSender", () => {
  it("[] -> {}", () => {
    expect(fromAnKnownSender()).toBe();
  });
});

xdescribe("Test fromAColdSender", () => {
  it("[] -> {}", () => {
    expect(fromAColdSender()).toBe();
  });
});
