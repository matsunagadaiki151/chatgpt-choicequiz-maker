import { TQuiz } from "@/features/quiz/types/QuizType";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const quizListState = atom<TQuiz[] | undefined>({
  key: "quizListState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
