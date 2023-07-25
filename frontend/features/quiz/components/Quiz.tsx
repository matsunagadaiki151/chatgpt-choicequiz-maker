"use client";

import Button from "../../../components/Button/Button";
import Choice from "../../../components/Choice/Choice";
import CorrectJudge from "../../../components/CorrectJudge/CorrectJudge";
import Question from "../../../components/Question/Question";
import React, { useState } from "react";
import { judgeCorrect } from "../api/judgeCorrect";
import { TQuizLayout } from "../types/QuizType";

const QuizLayout = ({ quiz }: TQuizLayout) => {
  const choiceSentents = quiz.choice.map((c) => c.choice_sentence);

  // useState
  const [selectedOption, setSelectedOption] = useState(choiceSentents[0]);
  const [display, setDisplay] = useState(false);
  const [isCorrect, setIsCorrect] = useState(
    judgeCorrect(choiceSentents[0], quiz)
  );

  // handler
  const onOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsCorrect(judgeCorrect(option, quiz));
  };

  const onButtonClick = () => {
    setDisplay(true);
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center m-auto space-y-8">
      <Question questionId={quiz.quiz_id} questionSentent={quiz.question} />
      <Choice
        options={choiceSentents}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
      />
      <Button bgColor="blue" onButtonClick={onButtonClick} className="w-32">
        解答
      </Button>
      {display && <CorrectJudge isCorrect={isCorrect} />}
    </div>
  );
};

export default QuizLayout;
