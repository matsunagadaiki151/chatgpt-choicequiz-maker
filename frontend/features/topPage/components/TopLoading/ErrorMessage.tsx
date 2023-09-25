import React from "react";

const ErrorMessage = () => {
  return (
    <div className="text-red-500 text-center font-marugo">
      <div className="font-bold mb-2 text-base md:text-xl">Error</div>
      <div className="text-xs md:text-base flex flex-wrap justify-center">
        <span>クイズの生成に失敗しました。</span>
        <span>別の文章で試してください。</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
