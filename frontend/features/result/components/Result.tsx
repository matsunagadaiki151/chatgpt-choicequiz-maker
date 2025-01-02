"use client";

import { useQuizIsCorrectStore } from "../../../stores/quizIsCorrectState";

const Result = () => {
  const correctCount = useQuizIsCorrectStore((state) => state.correctCount);
  return (
    <div className="text-3xl text-bold font-marugo text-giray">
      正解数 : {correctCount}問
    </div>
  );
};

export default Result;
