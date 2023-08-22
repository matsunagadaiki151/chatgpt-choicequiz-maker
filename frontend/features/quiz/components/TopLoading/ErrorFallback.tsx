import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ ...args }: FallbackProps): JSX.Element => {
  return (
    <div className="text-red-500 text-center font-marugo">
      <div className="font-bold mb-2 text-xl">Error</div>
      <div>
        クイズの生成に失敗しました。
        <br />
        別の文章で試してください。
      </div>
    </div>
  );
};
