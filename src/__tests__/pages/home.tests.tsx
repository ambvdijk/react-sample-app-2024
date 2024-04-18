import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "../../pages";

describe("Home page tests", () => {
  it("Should render correctly", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toMatchSnapshot();
  });
  it("Should have 2 links", () => {
    render(<Home />);
    expect(screen.getByRole("nav").childElementCount).toBe(2);
  });
});
