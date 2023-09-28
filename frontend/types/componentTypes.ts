import { ChangeEvent, ComponentProps, ReactNode } from "react";

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

export type TLinkButton = {
  bgColor: "blue" | "orange" | "green";
  size: "small" | "medium" | "large";
  href: string;
  children: ReactNode;
};

export type TCorrectJugde = {
  isCorrect: boolean;
} & ComponentProps<"div">;

export type THeader = {
  title: string;
};

export type TFooter = {
  author: string;
  createYear: number;
};
