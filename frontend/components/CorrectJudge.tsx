import { TCorrectJugde } from "@/types/componentTypes";
import React, { FC } from "react";

const CorrectJudge = ({ isCorrect }: TCorrectJugde) => {
  return (
    <div className="text-3xl font-marugo font-bold p-2 w-36 text-center">
      {isCorrect ? (
        <p className="text-red-500">正解！</p>
      ) : (
        <p className="text-blue-500">残念！</p>
      )}
    </div>
  );
};

export default CorrectJudge;
