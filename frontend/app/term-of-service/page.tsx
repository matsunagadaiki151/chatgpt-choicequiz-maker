import Link from "next/link";
import { loadMarkDown } from "@/libs/apiLoading";

export default async function Page() {
  const content = loadMarkDown("term-of-service.md");
  return (
    <div className="h-full flex flex-col items-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `${content}`,
        }}
        className="prose"
      />
      <div className="my-10">
        <Link className="basic-link" href="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
