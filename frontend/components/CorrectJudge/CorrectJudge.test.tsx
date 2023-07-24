import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CorrectJudge from "@/components/CorrectJudge/CorrectJudge";

describe("ラベルが正しく表示される", () => {
  test("「正解！」が正しく表示される", () => {
    render(<CorrectJudge isCorrect={true} />);

    const label = screen.getByText("正解！");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("text-red-500");
  });

  test("「残念！」が正しく表示される。", () => {
    render(<CorrectJudge isCorrect={false} />);

    const label = screen.getByText("残念！");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("text-blue-500");
  });
});
