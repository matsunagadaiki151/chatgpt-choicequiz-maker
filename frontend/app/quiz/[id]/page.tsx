import QuizPage from "@/features/quiz/components/QuizPage/QuizPage";

type PageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { id } = params;

  return <QuizPage id={id} />;
}
