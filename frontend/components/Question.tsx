import { TQuestion } from "@/types/componentTypes";
import React from "react";

const Question = ({ questionId, questionSentent }: TQuestion) => {
  return (
    <div className="text-giray m-2 font-marugo">
      <p className="font-bold mb-1">{`問題${questionId}`}</p>
      <div>{questionSentent}</div>
    </div>
  );
};

export default Question;
