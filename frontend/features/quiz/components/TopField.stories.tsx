import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider/next-13";
import "@app/globals.css";
import TopField from "./TopField";
import { ComponentProps } from "react";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { quizListState } from "../states/quizListState";
import { TQuiz } from "../types/QuizType";

const mockQuizzes: TQuiz[] = [
  {
    quiz_id: 1,
    question: "1問目の例です。",
    choice: [
      { choice_id: 1, choice_sentence: "これ" },
      { choice_id: 2, choice_sentence: "あれ" },
      { choice_id: 3, choice_sentence: "それ" },
      { choice_id: 4, choice_sentence: "どれ" },
    ],
    answer_id: 1,
  },
  {
    quiz_id: 2,
    question: "2問目の例です。",
    choice: [
      { choice_id: 1, choice_sentence: "どれ" },
      { choice_id: 2, choice_sentence: "あれ" },
      { choice_id: 3, choice_sentence: "それ" },
      { choice_id: 4, choice_sentence: "これ" },
    ],
    answer_id: 2,
  },
];

type Props = ComponentProps<typeof TopField>;
const MockedTopFiled = (props: Props) => {
  const setQuizList = useSetRecoilState(quizListState);
  setQuizList(mockQuizzes);

  return <TopField {...props} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layouts/TopField",
  component: MockedTopFiled,
  decorators: [
    (story) => (
      <MemoryRouterProvider url="/active" onPush={action("router.push")}>
        <RecoilRoot>{story()}</RecoilRoot>
      </MemoryRouterProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof TopField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quizzes: [
      {
        quiz_id: 1,
        question: "",
        choice: [
          {
            choice_id: 1,
            choice_sentence: "",
          },
        ],
        answer_id: 1,
      },
    ],
  },
};
