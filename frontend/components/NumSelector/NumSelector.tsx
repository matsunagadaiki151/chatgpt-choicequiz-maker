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
    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 font-marugo text-giray text-base md:text-xl">
      <label htmlFor="quiz-num-select">作成するクイズの数</label>
      <select
        name="quiz-num"
        id="quiz-num-select"
        onChange={numChangeHandler}
        value={selectedValue}
        className="border border-gray-300 hover:border-gray-400 text-sm md:text-lg px-2 py-2 md:px-4 md:py-2 rounded leading-tight focus:outline-none focus:border-blue-500"
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
