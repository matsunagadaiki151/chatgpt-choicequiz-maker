import { ComponentProps, ReactNode } from "react";

export type TQuestion = {
  questionId: number;
  questionSentent: string;
} & ComponentProps<"div">;

export type TChoice = {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
} & ComponentProps<"div">;

export type TButton = {
  bgColor: "blue" | "orange" | "green";
  onButtonClick: () => void;
  children: ReactNode;
} & ComponentProps<"button">;

export type TCorrectJugde = {
  isCorrect: boolean;
} & ComponentProps<"div">;
