"use client";

import { useRecoilValue } from "recoil";
import { quizIsCorrectSelector } from "../../../stores/quizIsCorrectState";
import Link from "next/link";

const Result = () => {
  const correctCount = useRecoilValue(quizIsCorrectSelector);
  return (
    <div className="flex flex-col justify-between space-y-10">
      <div className="text-xl md:text-3xl text-bold font-marugo text-giray">
        正解数 : {correctCount}問
      </div>
    </div>
  );
};

export default Result;
