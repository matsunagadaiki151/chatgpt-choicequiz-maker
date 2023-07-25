import { getMockQuiz } from "@/features/quiz/api/getQuiz";
import QuizLayout from "@/features/quiz/components/Quiz";
import Link from "next/link";

export default async function Home() {
  return (
    <Link
      href={"/quiz/1"}
    >
      <div className="text-giray font-marugo text-center hover:text-blue-300 hover:cursor-pointer">クイズを解く</div>
    </Link>
  );
}
