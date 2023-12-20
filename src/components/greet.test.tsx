import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("render hello on screen", () => {
  render(<Greet />);

  const helloDiv = screen.getByText(/hello/i);

  expect(helloDiv).toBeInTheDocument();
});
