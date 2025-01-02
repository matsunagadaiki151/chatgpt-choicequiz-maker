import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  quizIsCorrects: boolean[];
  correctCount: number;
};

type Action = {
  setQuizIsCorrects: (quizIsCorrect: boolean[]) => void;
};

const correctCount = (getCorrect: boolean[] | undefined) => {
  if (!getCorrect) return 0;
  return getCorrect.filter((isCorrect) => isCorrect).length;
};

export const useQuizIsCorrectStore = create<State & Action>()(
  immer(
    persist(
      (set, get) => ({
        quizIsCorrects: [],
        setQuizIsCorrects: (quizIsCorrect) =>
          set((state) => {
            state.quizIsCorrects = quizIsCorrect;
            return state;
          }),
        correctCount: correctCount(get()?.quizIsCorrects),
      }),
      {
        name: "quizIsCorrect-storage",
      }
    )
  )
);
