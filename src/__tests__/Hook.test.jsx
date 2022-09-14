// libs
import React from "react";
import { render, screen } from "@testing-library/react";
// components
import PageNumber from "@/components/HomeController/components/PageNumber";
// context
import { PageContext } from "@/contexts/pageContext";

describe("Test Page Number >", () => {
  it("case page = 1", () => {
    // arrange
    const input = "1";
    const output = "1";
    // action
    const TestingComponent = () => (
      <PageContext.Provider value={{ page: input }}>
        <PageNumber />
      </PageContext.Provider>
    );
    render(<TestingComponent />);
    // assert
    const pageNumber = screen.getByTestId("page-number").textContent;
    expect(pageNumber).toEqual(output);
  });

  it("case page = 2", () => {
    // arrange
    const input = "2";
    const output = "2";
    // action
    const TestingComponent = () => (
      <PageContext.Provider value={{ page: input }}>
        <PageNumber />
      </PageContext.Provider>
    );
    render(<TestingComponent />);
    // assert
    const pageNumber = screen.getByTestId("page-number").textContent;
    expect(pageNumber).toEqual(output);
  });

  it("case page = 3", () => {
    // arrange
    const input = "3";
    const output = "3";
    // action
    const TestingComponent = () => (
      <PageContext.Provider value={{ page: input }}>
        <PageNumber />
      </PageContext.Provider>
    );
    render(<TestingComponent />);
    // assert
    const pageNumber = screen.getByTestId("page-number").textContent;
    expect(pageNumber).toEqual(output);
  });
});
