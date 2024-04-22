import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../../pages";
import { BrowserRouter } from "react-router-dom";

describe("Home page tests", () => {
  it("Should render correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("main")).toMatchSnapshot();
  });
  it("Should have 2 links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("nav").childElementCount).toBe(2);
  });
});
