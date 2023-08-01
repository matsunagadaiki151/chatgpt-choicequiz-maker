"use client";

import Button from "@/components/Button/Button";
import SentenceField from "@/components/SententceField/SentenceField";
import { quizListState } from "@/features/quiz/states/quizListState";
import { TQuiz } from "@/features/quiz/types/QuizType";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

type TQuizListProps = {
  quizzes: TQuiz[];
};

const TopField = ({ quizzes }: TQuizListProps) => {
  const router = useRouter();
  const [sentence, SetSentence] = useState("");
  const setQuizList = useSetRecoilState(quizListState);
  const topButtonClick = async () => {
    setQuizList(quizzes);
    router.push("/quiz/1");
  };

  const onSentenceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetSentence(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col space-y-10 items-center">
        <div className="text-4xl text-bold font-marugo text-giray">
          問題を作ろう!!
        </div>
        <SentenceField
          sentence={sentence}
          onSentenceChange={onSentenceChange}
        />
        <Button bgColor="blue" onButtonClick={topButtonClick}>
          問題を作成する
        </Button>
      </div>
    </>
  );
};

export default TopField;
