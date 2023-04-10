import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JobLocations from "./JobLocations";

const mockLocations = ["Location 1", "Location 2", "Location 3"];

describe("JobLocations component", () => {
  test("displays single location without expand button", () => {
    render(<JobLocations locations={[mockLocations[0]]} />);
    const locationText = screen.getByText(mockLocations[0]);
    expect(locationText).toBeInTheDocument();
    const expandButton = screen.queryByRole("button");
    expect(expandButton).not.toBeInTheDocument();
  });

  test("displays multiple locations with expand button", () => {
    render(<JobLocations locations={mockLocations} />);
    const firstLocationText = screen.getByText(mockLocations[0]);
    expect(firstLocationText).toBeInTheDocument();
    const expandButton = screen.getByRole("button");
    expect(expandButton).toBeInTheDocument();
    fireEvent.click(expandButton);
    mockLocations.slice(1).forEach((location) => {
      const locationText = screen.getByText(location);
      expect(locationText).toBeInTheDocument();
    });
  });
});
