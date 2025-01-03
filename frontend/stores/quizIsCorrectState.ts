import { atomWithStorage } from "jotai/utils";
export const quizIsCorrectAtom = atomWithStorage<boolean[]>(
  "quizIsCorrect-storage",
  []
);
