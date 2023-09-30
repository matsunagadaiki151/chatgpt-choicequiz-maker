import TopField from "@/features/topPage/components/TopField/TopField";

export default async function Home() {
  return (
    <>
      <p className="text-center font-marugo font-bold text-red-500 mb-10 text-xs md:text-base">
        ※ 全体の利用状況に応じて使用できなくなる場合があります。
      </p>
      <TopField />
    </>
  );
}
