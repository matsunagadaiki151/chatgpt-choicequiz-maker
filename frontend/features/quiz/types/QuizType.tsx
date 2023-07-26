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
  quiz: TQuiz;
};
