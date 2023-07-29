import type { Meta, StoryObj } from "@storybook/react";
import "@app/globals.css";
import QuizNav from "./QuizNav";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layouts/QuizNav",
  component: QuizNav,
  tags: ["autodocs"],
} satisfies Meta<typeof QuizNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPageNav: Story = {
  args: {
    quizId: 1,
    maxQuizNum: 5,
  },
};

export const MiddlePageNav: Story = {
  args: {
    quizId: 2,
    maxQuizNum: 5,
  },
};

export const LastPageNav: Story = {
  args: {
    quizId: 5,
    maxQuizNum: 5,
  },
};
