import { TQuizLayout } from "../types/QuizType";

export const judgeCorrect = (
  choiceSentents: string,
  quiz: TQuizLayout["quiz"]
) => {
  const matchedChoice = quiz.choice.find(
    (c) => c.choice_sentence == choiceSentents
  );

  if (!matchedChoice) {
    throw new Error("対象の文章から選択肢Idを取得できませんでした。");
  }

  return matchedChoice.choice_id === quiz.answer_id;
};
