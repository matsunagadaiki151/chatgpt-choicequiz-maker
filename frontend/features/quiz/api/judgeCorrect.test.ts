import { judgeCorrect } from "./judgeCorrect";
import { TQuizProps } from "../types/QuizType";

describe("judgeCorrect関数", () => {
  const sampleQuiz: TQuizProps["quiz"] = {
    quiz_id: 1,
    question: "フランスの首都はどこ?",
    choice: [
      { choice_id: 1, choice_sentence: "ロンドン" },
      { choice_id: 2, choice_sentence: "パリ" },
      { choice_id: 3, choice_sentence: "ベルリン" },
      { choice_id: 4, choice_sentence: "トウキョウ" },
    ],
    answer_id: 2,
  };

  test("正解の時にtrueを返すか", () => {
    const choiceSentents = "パリ";
    const isCorrect = judgeCorrect(choiceSentents, sampleQuiz);
    expect(isCorrect).toBe(true);
  });

  test("不正解の時にfalseを返すか", () => {
    const choiceSentents = "ロンドン";
    const isCorrect = judgeCorrect(choiceSentents, sampleQuiz);
    expect(isCorrect).toBe(false);
  });

  test("存在しない選択肢が出された時エラーを出すか", () => {
    const choiceSentents = "Saga";
    expect(() => judgeCorrect(choiceSentents, sampleQuiz)).toThrowError(
      "対象の文章から選択肢Idを取得できませんでした。"
    );
  });
});
