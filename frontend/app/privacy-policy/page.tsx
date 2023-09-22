import { client } from "@/libs/cmsSetting";
import Link from "next/link";

export default async function Page() {
  const data = await client.get({
    endpoint: process.env.NEXT_PUBLIC_MICROCMS_PRIVACY ?? "",
  });
  return (
    <div className="h-full flex flex-col items-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.privacy}`,
        }}
        className="prose"
      />
      <div className="my-10">
        <Link className="text-black" href="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
