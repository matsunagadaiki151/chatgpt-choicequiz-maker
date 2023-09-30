"use client";

import { quizIsCorrectState } from "@/stores/quizIsCorrectState";
import { quizListState } from "@/stores/quizListState";
import { selectedOptionsState } from "@/stores/selectedOptionsState";
import { useRecoilValue } from "recoil";

const Detail = () => {
  const quizzes = useRecoilValue(quizListState);
  const selectedOptions = useRecoilValue(selectedOptionsState);
  const isCorrects = useRecoilValue(quizIsCorrectState);
  const answerSentences = quizzes?.map(
    (quiz) => quiz.choice[quiz.answer_id - 1].choice_sentence
  );

  const detailStyles = isCorrects.map((isCorrect) =>
    isCorrect ? "text-red-500" : "text-blue-500"
  );

  return (
    <div className="w-2/3 flex flex-col justify-center text-sm md:text-lg items-start space-y-5 md:space-y-10">
      {quizzes?.map((quiz, i) => (
        <div className="flex flex-col justify-center space-y-2">
          <p>
            <span>{quiz.quiz_id}.</span> {quiz.question}
          </p>
          <p className={detailStyles[i]}>
            <span className="text-xs">あなたの回答 :</span>{" "}
            <span>{selectedOptions![i]}</span>
          </p>
          <p className={detailStyles[i]}>
            <span className="text-xs">正解 : </span>
            {answerSentences![i]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
