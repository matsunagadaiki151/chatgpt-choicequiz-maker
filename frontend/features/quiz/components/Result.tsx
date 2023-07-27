"use client";

import { useRecoilValue } from "recoil";
import { quizIsCorrectSelector } from "../states/quizIsCorrectState";

const Result = () => {
  const correctCount = useRecoilValue(quizIsCorrectSelector);
  return (
    <div className="text-3xl text-bold font-marugo text-giray">
      正解数 : {correctCount}問
    </div>
  );
};

export default Result;
