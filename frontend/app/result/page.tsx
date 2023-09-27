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
        <div>
          <p className="text-sm md:text-lg">
            このアプリに関するアンケートにご協力ください
          </p>
          <Link
            href="https://forms.gle/wsuAHaiJV45CTTk1A"
            className="text-xs md:text-base basic-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            アンケートに回答する(Google Form)
          </Link>
        </div>
      </div>
      <div className="mb-5 md:mb-20 text-xs md:text-base">
        <LinkButton bgColor="blue" size="medium" href="/">
          トップへ戻る
        </LinkButton>
      </div>
    </div>
  );
}
