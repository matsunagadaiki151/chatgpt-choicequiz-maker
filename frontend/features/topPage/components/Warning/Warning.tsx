import { SELECTED_MODEL } from "../TopField/TopField";

export type TWarning = {
  sentence: string;
};

const Warning = ({ sentence }: TWarning) => {
  const recommendLengths: { [name: string]: number } = {
    "gpt-4o-mini": 12000,
  };

  const sentenceLength = recommendLengths[SELECTED_MODEL];
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
    </div>
  );
};

export default Warning;
