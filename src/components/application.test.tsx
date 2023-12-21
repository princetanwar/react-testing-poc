import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("test form application component", () => {
  it("name input element render", () => {
    render(<Application />);

    const headingElement = screen.getByRole("heading", {
      name: /job application form/i,
    });
    expect(headingElement).toBeInTheDocument();

    const secondHeading = screen.getByRole("heading", { level: 2 }); // level 2 means h2
    expect(secondHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByRole("textbox", { name: /email/i }); // name is the label value / aria-label value / inner text value
    expect(emailElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(/i agree to t&c/i);
    expect(termsElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
