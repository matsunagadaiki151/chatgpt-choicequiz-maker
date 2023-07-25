import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

const testTitle = "テストタイトル";

test("ヘッダーが正しく表示される", () => {
  render(<Header title={testTitle} />);

  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(testTitle);
});
