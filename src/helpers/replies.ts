import badwordsArray = require("badwords/array");
import { excuses, art } from "./bank";

export function excuseResponse(): string {
  return [
    "Please call me if you need me.",
    "At the moment I can't text since I am",
    randomExcuse(),
  ].join(" ");
}

export function profanityResponse(): string {
  return [
    "Please slow down on the profanities.",
    "I am a good bot and don't use bad language.",
    "I can however share my art :)",
    "\n" + art,
  ].join(" ");
}

export function randomExcuse(): string {
  return excuses[Math.floor(Math.random() * excuses.length)];
}

export function isProfane(message: string): boolean {
  const lower = message.toLowerCase();
  return badwordsArray.some((word: string) => lower.includes(word));
}
