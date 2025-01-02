"use client";

import { useQuizIsCorrectStore } from "@/stores/quizIsCorrectState";
import { useQuizListStore } from "@/stores/quizListState";
import { useSelectedOptionsStore } from "@/stores/selectedOptionsState";
import { useShallow } from "zustand/shallow";

const Detail = () => {
  const quizzes = useQuizListStore(useShallow((state) => state.quizList));
  const selectedOptions = useSelectedOptionsStore(
    useShallow((state) => state.selectedOptions)
  );
  const isCorrects = useQuizIsCorrectStore((state) => state.quizIsCorrects);
  const answerSentences = quizzes?.map(
    (quiz) => quiz.choice[quiz.answer_id - 1].choice_sentence
  );

  const detailStyles = isCorrects.map((isCorrect) =>
    isCorrect ? "text-red-500" : "text-blue-500"
  );

  return (
    <div className="flex flex-col justify-center text-lg items-start space-y-10">
      {quizzes?.map((quiz, i) => (
        <div className="flex flex-col justify-center space-y-2">
          <p>
            <span>{quiz.quiz_id}.</span> {quiz.question}
          </p>
          <p className={detailStyles[i]}>
            <span className="text-base">あなたの回答 :</span>{" "}
            <span>{selectedOptions![i]}</span>
          </p>
          <p className={detailStyles[i]}>
            <span className="text-base">正解 : </span>
            {answerSentences![i]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
