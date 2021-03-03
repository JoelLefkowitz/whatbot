import badwordsArray = require("badwords/array");

export function isProfane(message: string): boolean {
    const lower = message.toLowerCase();
    return badwordsArray.some((word: string) =>
        lower.includes(word)
    );
}
