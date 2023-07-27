import { TQuiz } from "../types/QuizType";

export const initializeQuizAnswers = (quizList: TQuiz[]) => {
  return quizList.map((quiz) => {
    const spreadQuiz = { ...quiz };
    return {
      ...spreadQuiz,
      userChoice: spreadQuiz.choice[0],
      isCorrect: false,
    };
  });
};
