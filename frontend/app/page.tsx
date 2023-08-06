import { getMockQuiz } from "@/features/quiz/api/getQuiz";
import TopField from "@/features/quiz/components/TopField/TopField";

export default async function Home() {
  const quizzes = await getMockQuiz();
  return <TopField quizzes={quizzes} />;
}
