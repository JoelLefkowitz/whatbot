export function getLast<T>(array: T[]): T {
    if (array.length == 0) {
        throw "Cannot get last element of an empty array";
    }

    return array[array.length - 1];
}
