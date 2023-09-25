import Link from "next/link";
import { loadMarkDown } from "@/libs/apiLoading";

export default async function Page() {
  const content = loadMarkDown("term-of-service.md");
  return (
    <div className="h-full flex flex-col items-center mx-10 text-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `${content}`,
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
