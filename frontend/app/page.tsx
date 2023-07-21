import Question from "@/components/Question";
import Image from "next/image";

const questionSentent = "これはなんでしょう?";
export default function Home() {
  return (
    <main>
      <div className="text-center">
        <Question questionId={1} questionSentent={questionSentent}></Question>
      </div>
    </main>
  );
}
