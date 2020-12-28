export function hoursSince(date: Date): number {
  return (Date.now() - date.valueOf()) / (1000 * 60 * 60);
}
