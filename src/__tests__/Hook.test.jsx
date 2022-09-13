// libs
import React from "react";
import { render, screen } from "@testing-library/react";
// components
import App from "@/App";

describe("test", () => {
  test("case1", () => {
    // arrange
    const output = "Happy coding";
    // action
    render(<App />);
    // assert
    const vietnameseSongs = screen.getByTestId("app").textContent;
    expect(vietnameseSongs).toEqual(output);
  });
});
