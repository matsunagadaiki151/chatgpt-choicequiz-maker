import Link from "next/link";
import fs from "fs";
import path from "path";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "app");

export default async function Page() {
  const fullPath = path.join(postsDirectory, "public/term-of-service.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const content = marked(fileContents);
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
