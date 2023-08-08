import { TQuiz } from "@/features/quiz/types/QuizType";

export type TQuizPageParam = {
  params: {
    id: number;
  };
};

export type TResponse = {
  Items: TQuiz[];
};
