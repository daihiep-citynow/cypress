// libs
import React from "react";
import { render, screen } from "@testing-library/react";
// components
import App from "@/App";

describe("test page", () => {
  test("case1", () => {
    // arrange
    // const input = "1";
    const output = "1";
    // action
    render(<App />);
    // assert
    const pageNumber = screen.getByTestId("page-number").textContent;
    expect(pageNumber).toEqual(output);
  });
});
