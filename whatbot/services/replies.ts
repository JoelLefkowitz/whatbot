import { excuses, artwork } from "./bank";

export function excuseReply(): string {
  return [
    "Please call me if you need me.",
    "My current reason I can't text is...\nI am",
    pickRandom(excuses),
    ":)",
  ].join(" ");
}

export function profaneReply(): string {
  return [
    "Please slow down on the profanities.",
    "I am a good bot and don't use bad language.",
    "I can however share my art 8=D",
    "\n" + pickRandom(artwork),
  ].join(" ");
}

export function pickRandom<T>(set: T[]): T {
  return set[Math.floor(Math.random() * set.length)];
}
