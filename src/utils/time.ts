import Long = require("long");

export function hoursSince(date: Date): number {
  return (Date.now() - date.valueOf()) / (1000 * 60 * 60);
}

export function dateFromLong(long: Long): Date {
  return new Date(1000 * long.low);
}
