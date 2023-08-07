import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "./Loading";

test("ローディングが正しく表示される。", () => {
  render(<Loading />);

  const loadingLabel = screen.getByText("クイズを作成しています");
  expect(loadingLabel).toBeInTheDocument();
});
