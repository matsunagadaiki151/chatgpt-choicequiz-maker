import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkButton from "./LinkButton";

const testBgColor = "blue";
const testLabel = "テストボタン";
const testHref = "";

test("ボタン風リンクが正しく表示される", () => {
  render(
    <LinkButton bgColor={testBgColor} href={testHref}>
      {testLabel}
    </LinkButton>
  );

  const linkButton = screen.getByText(testLabel);
  expect(linkButton).toBeInTheDocument();
  expect(linkButton).toHaveTextContent(testLabel);
});
