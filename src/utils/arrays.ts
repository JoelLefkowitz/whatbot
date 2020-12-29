export function getLast(array: unknown[]): unknown {
  if (array.length == 0) {
    throw "Cannot get last element of an empty array";
  }

  return array[array.length - 1];
}
