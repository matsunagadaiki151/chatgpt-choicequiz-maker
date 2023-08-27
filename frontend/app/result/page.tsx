import LinkButton from "@/components/LinkButton/LinkButton";
import Result from "@/features/quiz/components/Result";

export default async function Page() {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-3xl text-center font-marugo text-giray flex-1">
        <Result />
      </div>
      <div className="mb-20">
        <LinkButton bgColor="blue" size="medium" href="/">
          トップへ戻る
        </LinkButton>
      </div>
    </div>
  );
}
