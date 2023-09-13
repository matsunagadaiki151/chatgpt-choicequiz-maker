import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const quizIsCorrectState = atom<boolean[]>({
  key: "quizIsCorrectState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const quizIsCorrectSelector = selector<number>({
  key: "quizIsCorrectSelector",
  get: ({ get }) => {
    const quizIsCorrects = get(quizIsCorrectState);
    return quizIsCorrects.filter((quizIsCorrect) => quizIsCorrect === true)
      .length;
  },
});
