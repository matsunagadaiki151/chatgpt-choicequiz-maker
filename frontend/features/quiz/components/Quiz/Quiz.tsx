"use client";

import React from "react";
import { TQuizProps, TQuiz } from "../../types/QuizType";
import { useQuizIsCorrectStore } from "../../../../stores/quizIsCorrectState";
import Question from "@/components/Question/Question";
import Choice from "@/components/Choice/Choice";
import { useRouter } from "next/navigation";
import { judgeCorrect } from "@/features/result/api/judgeCorrect";
import { useQuizListStore } from "@/stores/quizListState";
import { useSelectedOptionsStore } from "@/stores/selectedOptionsState";
import { useShallow } from "zustand/shallow";

const Quiz = ({ id }: TQuizProps) => {
  const router = useRouter();
  const quizList = useQuizListStore((state) => state.quizList);
  const [selectedOptions, setSelectedOptions] = useSelectedOptionsStore(
    useShallow((state) => [state.selectedOptions, state.setSelectedOptions])
  );
  const [quizIsCorrects, setQuizIsCorrects] = useQuizIsCorrectStore(
    useShallow((state) => [state.quizIsCorrects, state.setQuizIsCorrects])
  );

  if (quizList === undefined || selectedOptions === undefined) {
    router.push("/");
    return;
  }

  const quiz: TQuiz = quizList[id - 1];
  const selectedOption = selectedOptions[id - 1];

  const setSelectedOption = (option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[id - 1] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const choiceSentents = quiz.choice.map((c) => c.choice_sentence);

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
