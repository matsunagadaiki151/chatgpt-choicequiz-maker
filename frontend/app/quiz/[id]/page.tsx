import QuizPage from "@/features/quiz/components/QuizPage/QuizPage";

type PageProps = {
  params: {
    id: number;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;

  return <QuizPage id={id} />;
}
