import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

const testAuthor = "テスト作者";
const testCreateYear = 2023;

test("フッターが正しく表示される", () => {
  render(<Footer author={testAuthor} createYear={testCreateYear} />);

  const footer = screen.getByRole("contentinfo");
  const term = screen.getByText("利用規約");
  const privacy = screen.getByText("プライバシーポリシー");
  expect(footer).toBeInTheDocument();
  expect(footer).toHaveTextContent(testAuthor);
  expect(footer).toHaveTextContent(testCreateYear.toString());
  expect(term).toBeInTheDocument();
  expect(privacy).toBeInTheDocument();
});
