"use client";
import { useRecoilValue } from "recoil";
import Quiz from "../Quiz/Quiz";
import QuizNav from "../QuizNav/QuizNav";
import { quizNumState } from "@/stores/quizNumState";

type TQuizPage = {
  id: number;
};

const QuizPage = ({ id }: TQuizPage) => {
  const quizNum = useRecoilValue(quizNumState);
  if (id > quizNum) {
    return <div>Not Found</div>;
  }
  return (
    <div className="h-full flex flex-col justify-betweeen">
      <div className="flex-1">
        <Quiz id={id} />
      </div>
      <div className="mx-24 mb-20">
        <QuizNav quizId={id} />
      </div>
    </div>
  );
};

export default QuizPage;
