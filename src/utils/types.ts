import { every } from "lodash";

export function allStrings(list: unknown[]): list is string[] {
    return every(list.map((i: unknown) => typeof i == "string"));
}
