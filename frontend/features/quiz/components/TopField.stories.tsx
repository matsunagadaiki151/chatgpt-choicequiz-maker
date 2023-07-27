import type { Meta, StoryObj } from "@storybook/react";
import "@app/globals.css";
import TopField from "./TopField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layouts/TopField",
  component: TopField,
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
