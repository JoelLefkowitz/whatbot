import badwordsArray = require("badwords/array");
import { excuses, artwork } from "../helpers/bank";

export function excuseReply(): string {
  return [
    "Please call me if you need me.",
    "At the moment I can't text since I am",
    randomExcuse(),
  ].join(" ");
}

export function profaneReply(): string {
  return [
    "Please slow down on the profanities.",
    "I am a good bot and don't use bad language.",
    "I can however share my art :)",
    "\n" + randomArtwork(),
  ].join(" ");
}

export function randomExcuse(): string {
  return excuses[Math.floor(Math.random() * excuses.length)];
}

export function randomArtwork(): string {
  return artwork[Math.floor(Math.random() * artwork.length)];
}

export function isProfane(message: string): boolean {
  const lower = message.toLowerCase();
  return badwordsArray.some((word: string) => lower.includes(word));
}
