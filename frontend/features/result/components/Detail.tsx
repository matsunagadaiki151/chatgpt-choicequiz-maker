"use client";

import { quizIsCorrectAtom } from "@/stores/quizIsCorrectState";
import { quizListAtom } from "@/stores/quizListState";
import { selectedOptionsAtom } from "@/stores/selectedOptionsState";
import { useAtom } from "jotai";

const Detail = () => {
  const [quizzes] = useAtom(quizListAtom);
  const [selectedOptions] = useAtom(selectedOptionsAtom);
  const [isCorrects] = useAtom(quizIsCorrectAtom);
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
