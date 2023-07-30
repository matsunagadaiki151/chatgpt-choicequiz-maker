import { atom } from "recoil";
import { TQuiz } from "../types/QuizType";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const quizListState = atom<TQuiz[]>({
  key: "quizListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
