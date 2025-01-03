import { atomWithStorage } from "jotai/utils";
export const selectedOptionsAtom = atomWithStorage<string[] | undefined>(
  "selectedOptions-storage",
  undefined
);
