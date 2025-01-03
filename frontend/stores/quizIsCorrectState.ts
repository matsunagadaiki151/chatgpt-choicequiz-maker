import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  quizIsCorrects: boolean[];
};

type Action = {
  setQuizIsCorrects: (quizIsCorrect: boolean[]) => void;
};

export const useQuizIsCorrectStore = create<State & Action>()(
  immer(
    persist(
      (set) => ({
        quizIsCorrects: [],
        setQuizIsCorrects: (quizIsCorrect) =>
          set((state) => {
            state.quizIsCorrects = quizIsCorrect;
            return state;
          }),
      }),
      {
        name: "quizIsCorrect-storage",
      }
    )
  )
);
