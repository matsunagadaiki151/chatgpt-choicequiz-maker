import { atom } from "recoil";
import { TQuiz } from "../types/QuizType";

export const quizListState = atom<TQuiz[]>({
  key: "quizListState",
  default: [],
});
