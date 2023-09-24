import { loadMarkDown } from "@/libs/apiLoading";
import Link from "next/link";

export default async function Page() {
  const content = loadMarkDown("disclaimer.md");
  return (
    <div className="h-full flex flex-col items-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.replace(
            /href/g,
            "target='_blank' rel='noopener noreferrer' href"
          )}`,
        }}
        className="prose markdown"
      />
      <div className="my-10">
        <Link className="basic-link" href="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
