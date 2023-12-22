import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Count from "./count";

describe("count component", () => {
  test("render correctly", () => {
    render(<Count />);

    const countParagraph = screen.getByText(/count: 0/i);
    expect(countParagraph).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(incrementButton).toBeInTheDocument();
  });

  test("render count 1 after increment click once", async () => {
    const user = userEvent.setup();
    render(<Count />);

    // before click count 0
    const countParagraph = screen.getByText(/count: 0/i);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    await act(async () => {
      await user.click(incrementButton);
    });
    expect(countParagraph).toHaveTextContent("count: 1");
  });
});
