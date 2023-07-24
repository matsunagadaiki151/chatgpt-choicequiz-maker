export type TChoiceContent = {
  choice_id: number;
  choice_sentence: string;
};

export type TQuizLayout = {
  quiz: {
    quiz_id: number;
    question: string;
    choice: TChoiceContent[];
    answer_id: number;
  };
};
