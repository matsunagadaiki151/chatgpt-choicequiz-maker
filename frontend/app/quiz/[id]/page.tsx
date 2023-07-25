import { getMockQuiz } from "@/features/quiz/api/getQuiz";
import QuizLayout from "@/features/quiz/components/Quiz";
import { TQuizPageParam } from "@/types/pageParam";
import Link from "next/link";

export default async function Page({ params }: TQuizPageParam) {
  const { id } = params;
  const sampleQuizzes = await getMockQuiz();
  if (id >= 6) {
    return <div>Not Found</div>;
  }
  const sampleQuiz = sampleQuizzes[id - 1];
  return (
    <main>
      <div className="text-center">
        <QuizLayout quiz={sampleQuiz} />
      </div>
      {id < 5 ? (
        <Link href={`/quiz/${Number(id) + 1}`}>
          <div className="mt-20 text-right mr-24 font-marugo text-giray hover:text-blue-300">
            次の問題へ→
          </div>
        </Link>
      ) : (
        <Link href="/result">
          <div className="mt-20 text-right mr-24 font-marugo text-giray hover:text-blue-300">
            問題を終了する
          </div>
        </Link>
      )}
    </main>
  );
}
