import LinkButton from "@/components/LinkButton/LinkButton";
import Detail from "@/features/result/components/Detail";

export default async function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-between text-giray font-marugo">
      <Detail />
      <div className="text-xs md:text-base my-5 md:my-20">
        <LinkButton bgColor="blue" size="medium" href="/result">
          結果画面へ戻る
        </LinkButton>
      </div>
    </div>
  );
}
