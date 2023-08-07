import React from "react";

const Loading = () => {
  return (
    <>
      <div>クイズを作成しています</div>
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </>
  );
};

export default Loading;
