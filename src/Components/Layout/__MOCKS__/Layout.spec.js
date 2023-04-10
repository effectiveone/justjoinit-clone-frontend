import React from "react";
import { render } from "@testing-library/react";
import Layout from "../Layout";
import WrappedComponent from "./WrappedComponent";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

// Use the mocked version of the Navbar component for testing
jest.mock("./Navbar");

describe("Layout HOC", () => {
  it("renders the Navbar component", () => {
    const LayoutComponent = Layout(WrappedComponent);
    const { getByTestId } = render(
      <MemoryRouter>
        <LayoutComponent />
      </MemoryRouter>
    );
    const navbar = getByTestId("mock-navbar");
    expect(navbar).toBeInTheDocument();
  });

  it("renders the WrappedComponent with passed props", () => {
    const LayoutComponent = Layout(WrappedComponent);
    const { getByText } = render(
      <MemoryRouter>
        <LayoutComponent text="Hello, World!" />
      </MemoryRouter>
    );
    const wrappedComponentText = getByText("Hello, World!");
    expect(wrappedComponentText).toBeInTheDocument();
  });
});
