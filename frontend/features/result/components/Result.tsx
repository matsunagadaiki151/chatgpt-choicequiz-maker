"use client";

import { useRecoilValue } from "recoil";
import { quizIsCorrectSelector } from "../../../stores/quizIsCorrectState";
import Link from "next/link";

const Result = () => {
  const correctCount = useRecoilValue(quizIsCorrectSelector);
  return (
    <div className="flex flex-col justify-between space-y-10">
      <div className="text-3xl text-bold font-marugo text-giray">
        正解数 : {correctCount}問
      </div>
      <div>
        <p className="text-lg">このアプリに関するアンケートにご協力ください</p>
        <Link
          href="https://forms.gle/wsuAHaiJV45CTTk1A"
          className="text-base basic-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          アンケートに回答する(Google Form)
        </Link>
      </div>
    </div>
  );
};

export default Result;
