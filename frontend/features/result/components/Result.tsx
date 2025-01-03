"use client";

import { useQuizIsCorrectStore } from "@/stores/quizIsCorrectState";
import { useMemo } from "react";

const Result = () => {
  const quizIsCorrect = useQuizIsCorrectStore((state) => state.quizIsCorrects);

  const correctCount = useMemo(() => {
    return quizIsCorrect.filter((isCorrect) => isCorrect === true).length;
  }, [quizIsCorrect]);
  return (
    <div className="text-3xl text-bold font-marugo text-giray">
      正解数 : {correctCount}問
    </div>
  );
};

export default Result;
