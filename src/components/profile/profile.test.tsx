import { render, screen } from "../../test-utils";
import Profile from "./profile";


describe("profile component", () => {
  test("render correctly", () => {
    render(
      <Profile />
    );
    const themeDiv = screen.getByText(/dark theme/i);
    expect(themeDiv).toBeInTheDocument();
  });
});
