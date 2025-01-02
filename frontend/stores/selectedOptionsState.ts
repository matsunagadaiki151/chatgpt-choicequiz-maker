import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  selectedOptions: string[] | undefined;
};

type Action = {
  setSelectedOptions: (selectedOptions: string[] | undefined) => void;
};

export const useSelectedOptionsStore = create<State & Action>()(
  persist(
    (set) => ({
      selectedOptions: undefined,
      setSelectedOptions: (selectedOptions) =>
        set((state) => ({ ...state, selectedOptions })),
    }),
    {
      name: "selectedOptions-storage",
    }
  )
);
