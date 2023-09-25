import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 md:space-y-4">
      <div className="text-xs md:text-base">クイズを作成しています</div>
      <div className="animate-spin h-5 w-5 md:h-10 md:w-10 border-4 border-blue-500 items-center text-center rounded-full border-t-transparent"></div>
    </div>
  );
};

export default Loading;
