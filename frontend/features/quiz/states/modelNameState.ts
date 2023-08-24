import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TModelName } from "../types/QuizType";

const { persistAtom } = recoilPersist();

export const modelNameState = atom<TModelName>({
  key: "modelNameState",
  default: "gpt-3.5-turbo",
  effects_UNSTABLE: [persistAtom],
});
