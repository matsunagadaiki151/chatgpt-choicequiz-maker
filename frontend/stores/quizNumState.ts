import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const quizNumState = atom<number>({
  key: "quizNumState",
  default: 5,
  effects_UNSTABLE: [persistAtom],
});
