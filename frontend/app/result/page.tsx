import QuizLayout from "@/features/quiz/components/Quiz";
import Result from "@/features/quiz/components/Result";

export default async function Page() {
  return (
    <main>
      <div className="text-3xl text-center font-marugo text-giray">
        <Result />
      </div>
    </main>
  );
}
