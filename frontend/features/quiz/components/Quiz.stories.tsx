import type { Meta, StoryObj } from "@storybook/react";
import "../app/globals.css";
import { useState } from "react";
import QuizLayout from "./Quiz";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layouts/QuizLayout",
  component: QuizLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof QuizLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quiz: {
      quiz_id: 1,
      question: "これはなんでしょう",
      choice: [
        {
          choice_id: 1,
          choice_sentence: "これ",
        },
        {
          choice_id: 2,
          choice_sentence: "それ",
        },
        {
          choice_id: 3,
          choice_sentence: "あれ",
        },
        {
          choice_id: 4,
          choice_sentence: "どれ",
        },
      ],
      answer_id: 1,
    },
  },
};
