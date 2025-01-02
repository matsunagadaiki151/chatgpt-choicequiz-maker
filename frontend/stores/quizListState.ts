import { TQuiz } from "@/features/quiz/types/QuizType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  quizList: TQuiz[] | undefined;
};

type Action = {
  setQuizList: (quizList: TQuiz[] | undefined) => void;
};

export const useQuizListStore = create<State & Action>()(
  persist(
    (set) => ({
      quizList: undefined,
      setQuizList: (quizList) => set((state) => ({ ...state, quizList })),
    }),
    {
      name: "quizList-storage",
    }
  )
);
