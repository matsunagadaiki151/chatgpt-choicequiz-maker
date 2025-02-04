export type TChoiceContent = {
  choice_id: number;
  choice_sentence: string;
};

export type TQuiz = {
  quiz_id: number;
  question: string;
  choice: TChoiceContent[];
  answer_id: number;
};

export type TQuizProps = {
  id: number;
};

export type TLoading = {
  sentence: string;
};

export type TModelName = "gpt-4o-mini";

export type TQuizData = {
  sentence: string;
  modelName: string;
  quizNum: number;
};
