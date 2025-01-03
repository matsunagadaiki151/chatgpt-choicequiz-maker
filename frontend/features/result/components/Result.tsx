"use client";

import { quizIsCorrectAtom } from "../../../stores/quizIsCorrectState";
import { useAtom } from "jotai";
import { useMemo } from "react";

const Result = () => {
  const [quizIsCorrect] = useAtom(quizIsCorrectAtom);

  const correctCount = useMemo(() => {
    return quizIsCorrect.filter((isCorrect) => isCorrect).length;
  }, [quizIsCorrect]);
  return (
    <div className="text-3xl text-bold font-marugo text-giray">
      正解数 : {correctCount}問
    </div>
  );
};

export default Result;
