import Quiz from "@/features/quiz/components/Quiz/Quiz";
import QuizNav from "@/features/quiz/components/QuizNav/QuizNav";
import QuizPage from "@/features/quiz/components/QuizPage/QuizPage";
import { TQuizPageParam } from "@/types/pageParam";

export default async function Page({ params }: TQuizPageParam) {
  const { id } = params;

  return <QuizPage id={id} />;
}
