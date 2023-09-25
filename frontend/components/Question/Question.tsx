import { TQuestion } from "@/types/componentTypes";
import React from "react";

const Question = ({ questionId, questionSentent }: TQuestion) => {
  return (
    <div className="text-giray font-marugo m-4 md:m-6">
      <p className="font-bold mb-1">{`問題${questionId} : ${questionSentent}`}</p>
    </div>
  );
};

export default Question;
