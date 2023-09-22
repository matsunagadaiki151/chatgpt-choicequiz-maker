import LinkButton from "@/components/LinkButton/LinkButton";

export default async function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-between text-giray font-marugo">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center space-y-2">
          <p>第1問 これは何?</p>
          <p>あなたの回答 : 1. あれ</p>
          <p>正解 : 4. これ</p>
        </div>
        <div className="flex flex-col justify-left space-y-2">
          <p>第2問 あれは何?</p>
          <p>あなたの回答 : 1. あれ</p>
          <p>正解 : 1. これ</p>
        </div>
      </div>
      <div className="mb-20">
        <LinkButton bgColor="blue" size="medium" href="/result">
          結果画面へ戻る
        </LinkButton>
      </div>
    </div>
  );
}
