"use client";

import QuizLayout from "@/layouts/QuizLayout";

const sampleQuiz = {
  quiz_id: 1,
  question: "LangChainは何のためのライブラリですか？",
  choice: [
    {
      choice_id: 1,
      choice_sentence: "大規模言語モデルを使ったサービス開発に役立つ",
    },
    {
      choice_id: 2,
      choice_sentence: "データベースを操作するためのモジュール",
    },
    {
      choice_id: 3,
      choice_sentence: "画像処理を行うためのライブラリ",
    },
    {
      choice_id: 4,
      choice_sentence: "音声認識を行うためのモジュール",
    },
  ],
  answer_id: 1,
};

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <QuizLayout quiz={sampleQuiz} />
      </div>
    </main>
  );
}
