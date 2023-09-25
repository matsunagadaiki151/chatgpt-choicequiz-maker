import { TWarning } from "@/features/quiz/types/QuizType";

const Warning = ({ sentence, selectedModelName }: TWarning) => {
  const recommendLengths: { [name: string]: number } = {
    "gpt-3.5-turbo": 3000,
    "gpt-3.5-turbo-16k": 12000,
  };

  const sentenceLength = recommendLengths[selectedModelName];
  return (
    <div className="text-yellow-500  text-center text-sm md:text-xl ">
      {sentence.length > sentenceLength && (
        <>
          <div className="mb-2 font-bold text-center">Warning</div>
          <div className="flex flex-wrap justify-center">
            <span>{`文章が${sentenceLength}文字より多いと`}</span>
            <span>精度が悪化することがあります。</span>
            <span>また、クイズの作成に時間がかかります</span>
          </div>
        </>
      )}
      {selectedModelName === "gpt-3.5-turbo-16k" &&
        sentence.length <= recommendLengths["gpt-3.5-turbo"] &&
        sentence.length > 0 && (
          <div className="flex flex-wrap justify-center">
            <span>{`文章が${recommendLengths["gpt-3.5-turbo"]}文字以内の場合`}</span>
            <span>GPT3.5Turboの使用を推奨します。</span>
          </div>
        )}
    </div>
  );
};

export default Warning;
