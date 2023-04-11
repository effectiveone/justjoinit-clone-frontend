import React from "react";
import { render, fireEvent } from "@testing-library/react";
import JobLocations from "./JobLocations";

describe("JobLocations", () => {
  const locations = ["New York", "San Francisco", "Chicago", "Los Angeles"];

  it("should render a single location when there is only one location", () => {
    const { getByText, queryByRole } = render(
      <JobLocations locations={["New York"]} />
    );

    expect(getByText("New York")).toBeInTheDocument();
    expect(queryByRole("button")).toBeNull();
  });

  it("should render the first location and an expand button when there are multiple locations", () => {
    const { getByText, getByRole } = render(
      <JobLocations locations={locations} />
    );

    expect(getByText("New York")).toBeInTheDocument();
    expect(getByText("+3")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should expand the list of locations when the expand button is clicked", () => {
    const { getByText, queryByText, getByRole } = render(
      <JobLocations locations={locations} />
    );

    expect(queryByText("San Francisco")).toBeNull();

    fireEvent.click(getByRole("button"));

    expect(getByText("San Francisco")).toBeInTheDocument();
    expect(getByText("Chicago")).toBeInTheDocument();
    expect(getByText("Los Angeles")).toBeInTheDocument();
  });
});
