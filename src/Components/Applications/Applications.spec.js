import React from "react";
import { render, screen } from "@testing-library/react";
import { Applications } from "./Applications";

jest.mock("../../Context/useApllicationContext", () => ({
  useApllicationContext: jest.fn(() => ({ applications: [] })),
}));

describe("Applications", () => {
  it("should render a heading", () => {
    render(<Applications />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render a message when there are no applications", () => {
    const { container } = render(<Applications />);
    expect(screen.getByText(/no applications found/i)).toBeInTheDocument();
    expect(container.querySelector("h5")).toBeInTheDocument();
  });

  it("should render a list of applications", () => {
    const applications = [
      { id: 1, name: "Application 1" },
      { id: 2, name: "Application 2" },
      { id: 3, name: "Application 3" },
    ];
    jest.mock("../../Context/useApllicationContext", () => ({
      useApllicationContext: jest.fn(() => ({ applications })),
    }));
    render(<Applications />);
    expect(screen.getAllByRole("gridcell")).toHaveLength(applications.length);
  });
});
