import { getMockQuiz } from "@/features/quiz/api/getQuiz";
import QuizLayout from "@/features/quiz/components/Quiz";
import { TQuizPageParam } from "@/types/pageParam";

export default async function Home({ params }: TQuizPageParam) {
  const { id } = params;
  const sampleQuizzes = await getMockQuiz();
  if (id >= 6) {
    return <div>idは5以内でお願いします。</div>;
  }
  const sampleQuiz = sampleQuizzes[id - 1];
  return (
    <main>
      <div className="text-center">
        <QuizLayout quiz={sampleQuiz} />
      </div>
    </main>
  );
}
