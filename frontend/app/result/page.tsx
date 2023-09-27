import LinkButton from "@/components/LinkButton/LinkButton";
import Result from "@/features/result/components/Result";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-center font-marugo text-giray flex-1 flex flex-col items-center space-y-4">
        <Result />
        <Link href="/result/detail" className="basic-link text-xs md:text-base">
          詳細を見る
        </Link>
      </div>
      <div className="text-xs md:text-base mb-20">
        <LinkButton bgColor="blue" size="medium" href="/">
          トップへ戻る
        </LinkButton>
      </div>
    </div>
  );
}
