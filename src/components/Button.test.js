import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders without failure", () => {
    render(<Button />);
  });

  it("renders the text given as a prop", () => {
    const { getByText } = render(<Button text="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders the button with the type given as prop", () => {
    const { getByText } = render(<Button type="submit" text="Test" />);
    const element = getByText("Test");
    expect(element.type).toEqual("submit");
  });

  it("calls the onClick callback passed when the button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} text="Test" />);

    fireEvent.click(getByText("Test"));

    expect(handleClick).toHaveBeenCalled();
  });
});
