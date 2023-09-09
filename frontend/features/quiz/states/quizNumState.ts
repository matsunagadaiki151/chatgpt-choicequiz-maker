import { atom } from "recoil";

export const quizNumState = atom<number>({
  key: "quizNumState",
  default: 5,
});
