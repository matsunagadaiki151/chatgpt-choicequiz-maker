import { quizNumState } from "@/stores/quizNumState";
import { ChangeEvent } from "react";

export type TQuizNumInput = {
  options: {
    value: number;
    label: string;
  }[];
  numChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: number;
};

const QuizNumInput = ({
  options,
  numChangeHandler,
  selectedValue,
}: TQuizNumInput) => {
  return (
    <div className="flex justify-center items-center space-x-6 font-marugo text-giray text-xl">
      <label htmlFor="quiz-num-select">作成するクイズの数</label>
      <select
        name="quiz-num"
        id="quiz-num-select"
        onChange={numChangeHandler}
        value={selectedValue}
        className="border border-gray-300 hover:border-gray-400 text-lg px-4 py-2 rounded leading-tight focus:outline-none focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizNumInput;
