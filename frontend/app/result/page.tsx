import LinkButton from "@/components/LinkButton/LinkButton";
import Result from "@/features/result/components/Result";

export default async function Page() {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-center font-marugo text-giray flex-1">
        <Result />
      </div>
      <div className="mb-5 md:mb-20 text-xs md:text-base">
        <LinkButton bgColor="blue" size="medium" href="/">
          トップへ戻る
        </LinkButton>
      </div>
    </div>
  );
}
