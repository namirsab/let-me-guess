import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders without failure", () => {
    render(<Button />);
  });

  it("renders the text given as a prop", () => {
    render(<Button text="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders the button with the type given as prop", () => {
    render(<Button type="submit" text="Test" />);
    const element = screen.getByRole("button", { type: "submit" });
    expect(element).toBeInTheDocument();
  });

  it("calls the onClick callback passed when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="Test" />);

    fireEvent.click(screen.getByText("Test"));

    expect(handleClick).toHaveBeenCalled();
  });
});
