import { loadMarkDown } from "@/libs/apiLoading";
import Link from "next/link";

export default async function Page() {
  const content = loadMarkDown("disclaimer.md");
  return (
    <div className="h-full flex flex-col items-center mx-10 text-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.replace(
            /href/g,
            "target='_blank' rel='noopener noreferrer' href"
          )}`,
        }}
        className="prose markdown"
      />
      <div className="my-5 md:my-10 text-sm md:text-base">
        <Link className="basic-link" href="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
