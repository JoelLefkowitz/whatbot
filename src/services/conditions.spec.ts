// import {
//   mockMesssages,
//   mockTrueLazyCondition,
//   mockWhitelist,
//   mockFalseLazyCondition,
// } from "../helpers/mocks";
// import {
//   checkFailure,
//   sentByAnIndividual,
//   notFromAWhitelistedSender,
//   fromAnKnownSender,
//   fromAColdSender,
// } from "./conditions";
// import { LazyCondition } from "../helpers/models";
//
// describe("Test checkFailure", () => {
//   it("mockTrueLazyCondition -> true", () => {
//     const lazyCondition = mockTrueLazyCondition();
//     expect(lazyCondition.condition()).toBe(true);
//   });
//   it("mockFalseLazyCondition -> false", () => {
//     const lazyCondition = mockFalseLazyCondition();
//     expect(lazyCondition.condition()).toBe(false);
//   });
// });
//
// describe("Test sentByAnIndividual", () => {
//   it("[] -> {}", () => {
//     const lazyCondition = sentByAnIndividual(mockMesssages);
//     expect(lazyCondition.condition()).toBe(true);
//   });
//   it("[] -> {}", () => {
//     const lazyCondition = sentByAnIndividual(mockMesssages);
//     expect(lazyCondition.condition()).toBe(false);
//   });
// });
//
// describe("Test notFromAWhitelistedSender", () => {
//   it("[] -> {}", () => {
//     const lazyCondition = notFromAWhitelistedSender(
//       mockMesssages,
//       mockWhitelist
//     );
//     expect(lazyCondition.condition()).toBe(true);
//   });
//   it("[] -> {}", () => {
//     const lazyCondition = notFromAWhitelistedSender(
//       mockMesssages,
//       mockWhitelist
//     );
//     expect(lazyCondition.condition()).toBe(false);
//   });
// });
//
// describe("Test fromAnKnownSender", () => {
//   it("[] -> {}", () => {
//     const lazyCondition = fromAnKnownSender(mockMesssages);
//     expect(lazyCondition.condition()).toBe(true);
//   });
//   it("[] -> {}", () => {
//     const lazyCondition = fromAnKnownSender(mockMesssages);
//     expect(lazyCondition.condition()).toBe(false);
//   });
// });
//
// describe("Test fromAColdSender", () => {
//   it("[] -> {}", () => {
//     const lazyCondition = fromAColdSender(mockMesssages);
//     expect(lazyCondition.condition()).toBe(true);
//   });
//   it("[] -> {}", () => {
//     const lazyCondition = fromAColdSender(mockMesssages);
//     expect(lazyCondition.condition()).toBe(false);
//   });
// });
