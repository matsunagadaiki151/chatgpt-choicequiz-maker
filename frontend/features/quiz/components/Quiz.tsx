"use client";

import Button from "../../../components/Button/Button";
import Choice from "../../../components/Choice/Choice";
import CorrectJudge from "../../../components/CorrectJudge/CorrectJudge";
import Question from "../../../components/Question/Question";
import React, { useEffect, useState } from "react";
import { TQuizProps } from "../types/QuizType";
import { quizListState } from "../states/quizListState";
import { useRecoilState, useRecoilValue } from "recoil";
import { quizIsCorrectState } from "../states/quizIsCorrectState";
import { judgeCorrect } from "../api/judgeCorrect";

const Quiz = ({ id }: TQuizProps) => {
  const QUIZ_NUM = 5;
  const quizList = useRecoilValue(quizListState);
  const [quizIsCorrects, setQuizIsCorrects] =
    useRecoilState(quizIsCorrectState);

  useEffect(() => {
    if (quizIsCorrects.length !== QUIZ_NUM) {
      setQuizIsCorrects(Array(QUIZ_NUM).fill(false));
    }
  }, []);

  const quiz = quizList[id - 1];
  const choiceSentents = quiz.choice.map((c) => c.choice_sentence);

  // useState
  const [selectedOption, setSelectedOption] = useState("");
  const [display, setDisplay] = useState(false);
  // handler
  const onOptionChange = (option: string) => {
    setSelectedOption(option);
    const isCorrect = judgeCorrect(option, quiz);
    const nowIsCorrects = [...quizIsCorrects].map((nowIsCorrect, index) =>
      id - 1 === index ? isCorrect : nowIsCorrect
    );
    setQuizIsCorrects(nowIsCorrects);
  };

  const onButtonClick = () => {
    setDisplay(true);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <Question questionId={quiz.quiz_id} questionSentent={quiz.question} />
      <Choice
        options={choiceSentents}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
      />
      <Button bgColor="blue" onButtonClick={onButtonClick} className="w-32">
        解答
      </Button>
      {display && <CorrectJudge isCorrect={quizIsCorrects[id - 1]} />}
    </div>
  );
};

export default Quiz;
