import { TModelName, TWarning } from "../../types/QuizType";

const Warning = ({ sentence, selectedModelName }: TWarning) => {
  const recommendLengths: { [name: string]: number } = {
    "gpt-3.5-turbo": 3000,
    "gpt-3.5-turbo-16k": 12000,
  };

  const sentenceLength = recommendLengths[selectedModelName];
  return (
    <div className="text-yellow-500 text-center">
      {sentence.length > sentenceLength && (
        <>
          <div className="font-bold text-center text-xl mb-2">Warning</div>
          <div>
            {`文章が${sentenceLength}文字より多いと精度が悪化することがあります`}
            <br />
            また、クイズの作成に時間がかかります
          </div>
        </>
      )}
      {selectedModelName === "gpt-3.5-turbo-16k" &&
        sentence.length <= recommendLengths["gpt-3.5-turbo"] &&
        sentence.length > 0 && (
          <div>
            {`文章が${recommendLengths["gpt-3.5-turbo"]}文字以内の場合GPT3.5Turboの使用を推奨します。`}
          </div>
        )}
    </div>
  );
};

export default Warning;
