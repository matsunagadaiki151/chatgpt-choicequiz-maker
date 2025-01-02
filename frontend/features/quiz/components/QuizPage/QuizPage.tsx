"use client";
import Quiz from "../Quiz/Quiz";
import QuizNav from "../QuizNav/QuizNav";
import { useQuizNumStore } from "@/stores/quizNumState";

type TQuizPage = {
  id: number;
};

const QuizPage = ({ id }: TQuizPage) => {
  const quizNum = useQuizNumStore((state) => state.quizNum);
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
