"use client";

import Button from "@/components/Button/Button";
import { quizListState } from "@/features/quiz/states/quizListState";
import { TQuiz } from "@/features/quiz/types/QuizType";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

type TQuizListProps = {
  quizzes: TQuiz[];
};

const TopField = ({ quizzes }: TQuizListProps) => {
  const router = useRouter();
  const setQuizList = useSetRecoilState(quizListState);
  const topButtonClick = async () => {
    setQuizList(quizzes);
    router.push("/quiz/1");
  };

  return (
    <Button bgColor="blue" onButtonClick={topButtonClick}>
      クイズを解く
    </Button>
  );
};

export default TopField;
