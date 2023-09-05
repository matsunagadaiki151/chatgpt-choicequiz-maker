export const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT ?? "";
if (endpoint === "") {
  throw new Error("環境変数の読み込みに失敗しました。");
}
console.log("endpoint: ", endpoint);
