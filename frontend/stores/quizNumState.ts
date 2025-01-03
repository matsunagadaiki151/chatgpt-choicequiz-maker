import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  quizNum: number;
};

type Action = {
  setQuizNum: (quizNum: number) => void;
};

export const useQuizNumStore = create<State & Action>()(
  persist(
    (set) => ({
      quizNum: 5,
      setQuizNum: (quizNum) => set((state) => ({ ...state, quizNum })),
    }),
    {
      name: "quizNum-storage",
    }
  )
);
