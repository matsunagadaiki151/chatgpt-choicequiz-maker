import { Button } from "@/components/Button";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const testBgColor = "blue";
const testButtonLabel = "テストボタン";

test("ボタンが正しく表示される", () => {
  const onButtonClickMock = jest.fn();
  render(
    <Button bgColor={testBgColor} onButtonClick={onButtonClickMock}>
      {testButtonLabel}
    </Button>
  );

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(testButtonLabel);
});

test("onButtonChangeが呼び出されるか", () => {
  const onButtonClickMock = jest.fn();
  render(
    <Button bgColor={testBgColor} onButtonClick={onButtonClickMock}>
      {testButtonLabel}
    </Button>
  );

  fireEvent.click(screen.getByRole("button"));
  expect(onButtonClickMock).toHaveBeenCalledTimes(1);
});
