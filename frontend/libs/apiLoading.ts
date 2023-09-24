import fs from "fs";
import path from "path";
import { marked } from "marked";

export const loadMarkDown = (file_path: string) => {
  const postsDirectory = path.join(process.cwd(), "app");
  const fullPath = path.join(postsDirectory, `public/${file_path}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const content = marked(fileContents);
  return content;
};
