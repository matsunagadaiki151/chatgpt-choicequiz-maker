import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectedOptionsState = atom<string[] | undefined>({
  key: "selectedOptionsState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
