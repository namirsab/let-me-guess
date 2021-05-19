import { render, screen, cleanup } from "@testing-library/react";
import NameCard from "./NameCard";

describe("<NameCard />", () => {
  it("renders without failure", () => {
    render(<NameCard />);
  });

  it("renders the name passed as props", () => {
    render(<NameCard name="Namir" />);
    expect(screen.getByText("Namir")).toBeInTheDocument();
  });

  it("renders the gender icon depending on the passed as props", () => {
    render(<NameCard name="Namir" gender="male" />);
    expect(screen.getByText("♂")).toBeInTheDocument();
    cleanup();
    render(<NameCard name="Maria" gender="female" />);
    expect(screen.getByText("♀")).toBeInTheDocument();
  });
});
