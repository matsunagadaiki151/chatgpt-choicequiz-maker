import { atomWithStorage } from "jotai/utils";

export const quizNumAtom = atomWithStorage<number>("quizNum-storage", 5);
