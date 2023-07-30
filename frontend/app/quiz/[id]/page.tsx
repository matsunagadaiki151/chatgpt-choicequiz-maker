import LinkButton from "@/components/LinkButton/LinkButton";
import Quiz from "@/features/quiz/components/Quiz";
import QuizNav from "@/features/quiz/components/QuizNav/QuizNav";
import { TQuizPageParam } from "@/types/pageParam";
import Link from "next/link";

export default async function Page({ params }: TQuizPageParam) {
  const { id } = params;
  const MAX_QUIZ_NUM = 5;

  if (id >= 6) {
    return <div>Not Found</div>;
  }

  return (
    <div className="h-full flex flex-col justify-betweeen">
      <div className="flex-1">
        <Quiz id={id} />
      </div>
      <div className="mx-24 mb-20">
        <QuizNav quizId={id} maxQuizNum={5} />
      </div>
    </div>
  );
}
