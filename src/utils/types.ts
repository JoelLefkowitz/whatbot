import { every } from "lodash";

export function allStrings(list: any[]) {
  return every(list.map((i: any) => typeof i == "string"));
}
