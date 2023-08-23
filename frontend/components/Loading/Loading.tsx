import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div>クイズを作成しています</div>
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 items-center text-center rounded-full border-t-transparent"></div>
    </div>
  );
};

export default Loading;
