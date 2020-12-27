import badwordsArray = require("badwords/array");
import { excuses, art } from "./bank";

export const excuseResponse = (): string =>
  "Please call me if you need me. At the moment I can't text since I am " +
  randomExcuse();

export const profanityResponse = (): string =>
  "Please slow down on the profanities, I am a good bot and don't use bad language. I can however share art:\n" +
  art;

export const randomExcuse = (): string => {
  return excuses[Math.floor(Math.random() * excuses.length)];
};

export const isProfane = (message: string): boolean => {
  const lower = message.toLowerCase();
  return badwordsArray.some((word: string) => lower.includes(word));
};
