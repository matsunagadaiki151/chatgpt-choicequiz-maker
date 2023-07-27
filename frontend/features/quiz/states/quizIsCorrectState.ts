import { atom, selector } from "recoil";

export const quizIsCorrectState = atom<boolean[]>({
  key: "quizIsCorrectState",
  default: [],
});

export const quizIsCorrectSelector = selector<number>({
  key: "quizIsCorrectSelector",
  get: ({ get }) => {
    const quizIsCorrects = get(quizIsCorrectState);
    return quizIsCorrects.filter((quizIsCorrect) => quizIsCorrect === true)
      .length;
  },
});
