import Long = require("long");

export function hoursSince(date: Date): number {
    return (Date.now() - date.valueOf()) / (1000 * 60 * 60);
}

export function parseDate(num: number | Long): Date {
    return new Date(
        typeof num == "number" ? num : 1000 * num.low
    );
}
