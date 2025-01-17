"use client";

import { quizIsCorrectAtom } from "../../../stores/quizIsCorrectState";
import Confetti from "react-confetti";
import { useAtom } from "jotai";
import { useMemo } from "react";

const Result = () => {
  const [quizIsCorrect] = useAtom(quizIsCorrectAtom);

  const correctCount = useMemo(() => {
    return quizIsCorrect.filter((isCorrect) => isCorrect).length;
  }, [quizIsCorrect]);
  const isAllCorrect = correctCount === quizIsCorrect.length;

  return (
    <div>
      {isAllCorrect && (
        <Confetti numberOfPieces={1000} recycle={false} tweenDuration={5000} />
      )}
      <div className="text-3xl text-bold font-marugo text-giray">
        正解数 : {correctCount}問
      </div>
    </div>
  );
};

export default Result;
