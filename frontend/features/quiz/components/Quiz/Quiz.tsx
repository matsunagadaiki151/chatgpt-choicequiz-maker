"use client";

import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TQuizProps } from "../../types/QuizType";
import { quizListState } from "../../states/quizListState";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { judgeCorrect } from "../../api/judgeCorrect";
import Question from "@/components/Question/Question";
import Choice from "@/components/Choice/Choice";
import { useRouter } from "next/navigation";

const Quiz = ({ id }: TQuizProps) => {
  const router = useRouter();
  const quizList = useRecoilValue(quizListState);
  const [quizIsCorrects, setQuizIsCorrects] =
    useRecoilState(quizIsCorrectState);

  if (quizList === undefined) {
    router.push("/");
    return;
  }

  const quiz = quizList[id - 1];
  const choiceSentents = quiz.choice.map((c) => c.choice_sentence);

  // useState
  const [selectedOption, setSelectedOption] = useState("");
  // handler
  const onOptionChange = (option: string) => {
    setSelectedOption(option);
    const isCorrect = judgeCorrect(option, quiz);
    const nowIsCorrects = [...quizIsCorrects].map((nowIsCorrect, index) =>
      id - 1 === index ? isCorrect : nowIsCorrect
    );
    setQuizIsCorrects(nowIsCorrects);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <Question questionId={quiz.quiz_id} questionSentent={quiz.question} />
      <Choice
        options={choiceSentents}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
      />
    </div>
  );
};

export default Quiz;
