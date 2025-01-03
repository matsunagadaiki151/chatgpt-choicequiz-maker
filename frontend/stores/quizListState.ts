import { TQuiz } from "@/features/quiz/types/QuizType";
import { atomWithStorage } from "jotai/utils";

export const quizListAtom = atomWithStorage<TQuiz[] | undefined>(
  "quizList-storage",
  undefined
);
