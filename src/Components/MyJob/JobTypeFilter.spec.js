import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JobTypeFilter from "./JobTypeFilter";

describe("JobTypeFilter", () => {
  const searchOptions = {
    jobType: { fullTime: false, partTime: false, wfh: false },
  };
  const setSearchOptions = jest.fn();

  beforeEach(() => {
    render(
      <JobTypeFilter
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
    );
  });

  test("renders job type filter component with checkboxes", () => {
    expect(screen.getByText("Job Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Full Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Part Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Work From Home")).toBeInTheDocument();
  });

  test("updates search options on checkbox click", () => {
    fireEvent.click(screen.getByLabelText("Full Time"));

    expect(setSearchOptions).toHaveBeenCalledWith({
      jobType: { fullTime: true, partTime: false, wfh: false },
    });
  });
});
