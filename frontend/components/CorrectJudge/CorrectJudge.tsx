import { TCorrectJugde } from "@/types/componentTypes";
import React from "react";

const CorrectJudge = ({ isCorrect }: TCorrectJugde) => {
  return (
    <div className="text-3xl font-marugo font-bold p-2">
      {isCorrect ? (
        <p className="text-red-500">正解！</p>
      ) : (
        <p className="text-blue-500">残念！</p>
      )}
    </div>
  );
};

export default CorrectJudge;
