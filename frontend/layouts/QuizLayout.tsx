import { TQuizLayout } from "@/types/layoutTypes";
import Button from "../components/Button";
import Choice from "../components/Choice";
import CorrectJudge from "../components/CorrectJudge";
import Question from "../components/Question";
import React, { createContext, useEffect, useState } from "react";

const QuizLayout = ({ quiz }: TQuizLayout) => {
  const choiceSentents = quiz.choice.map((c) => c.choice_sentence);
  const [quizId, setQuizId] = useState(1);
  const [quizSentent, setQuizSentent] = useState("");
  const [selectedOption, setSelectedOption] = useState(choiceSentents[0]);
  const judgeCorrect = (choiceSentents: string, quiz: TQuizLayout["quiz"]) => {
    const matchedChoice = quiz.choice.find(
      (c) => c.choice_sentence == choiceSentents
    );

    if (!matchedChoice) {
      throw new Error("対象の文章から選択肢Idを取得できませんでした。");
    }

    return matchedChoice.choice_id === quiz.answer_id;
  };
  const [isCorrect, setIsCorrect] = useState(
    judgeCorrect(choiceSentents[0], quiz)
  );

  const [display, setDisplay] = useState(false);
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
