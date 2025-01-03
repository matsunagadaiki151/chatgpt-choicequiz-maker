import { create } from "zustand";

type State = {
  isLoading: boolean;
};

type Action = {
  setIsLoading: (after: boolean) => void;
};

export const useIsLoadingStore = create<State & Action>()((set) => ({
  isLoading: false,
  setIsLoading: (after) => set((state) => ({ ...state, isLoading: after })),
}));
