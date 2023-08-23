import { atom } from "recoil";

export const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});
