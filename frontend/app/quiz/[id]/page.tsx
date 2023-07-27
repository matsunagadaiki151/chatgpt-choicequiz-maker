import Quiz from "@/features/quiz/components/Quiz";
import { TQuizPageParam } from "@/types/pageParam";
import Link from "next/link";

export default async function Page({ params }: TQuizPageParam) {
  const { id } = params;

  if (id >= 6) {
    return <div>Not Found</div>;
  }

  return (
    <main>
      <div className="text-center">
        <Quiz id={id} />
      </div>
      {id < 5 ? (
        <Link href={`/quiz/${Number(id) + 1}`}>
          <div className="mt-20 text-right mr-24 font-marugo text-giray hover:text-blue-300">
            次の問題へ→
          </div>
        </Link>
      ) : (
        <Link href="/result">
          <div className="mt-20 text-right mr-24 font-marugo text-giray hover:text-blue-300">
            問題を終了する
          </div>
        </Link>
      )}
    </main>
  );
}
