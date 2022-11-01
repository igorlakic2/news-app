import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./Products";

describe("h3 test block", () => {
  test("Title h3 is displayed", () => {
    render(<Products />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  test("H3 text is 'Products'", () => {
    render(<Products />);
    const element = screen.getByText(/products/i);
    expect(element).toBeInTheDocument();
  });
});
