import { quizNumState } from "@/stores/quizNumState";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

const QuizNumInput = () => {
  const [quizNum, setQuizNum] = useRecoilState(quizNumState);
  const numChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuizNum = parseInt(e.target.value);
    setQuizNum(newQuizNum);
  };

  return (
    <div className="flex justify-center items-center space-x-6 font-marugo text-giray text-xl">
      <label htmlFor="quiz-num-select">作成するクイズの数</label>
      <select
        name="quiz-num"
        id="quiz-num-select"
        onChange={numChangeHandler}
        value={quizNum}
        className="border border-gray-300 hover:border-gray-400 text-lg px-4 py-2 rounded leading-tight focus:outline-none focus:border-blue-500"
      >
        <option value={1}>1問</option>
        <option value={2}>2問</option>
        <option value={3}>3問</option>
        <option value={4}>4問</option>
        <option value={5}>5問</option>
      </select>
    </div>
  );
};

export default QuizNumInput;
