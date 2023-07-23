import { ReactNode } from "react";

export type TQuestion = {
  questionId: number;
  questionSentent: string;
};

export type TChoice = {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
};

export type TButton = {
  bgColor: "blue" | "orange" | "green";
  onButtonClick: () => void;
  children: ReactNode;
};
