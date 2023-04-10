import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SalaryFilter } from "./SalaryFilter";

describe("SalaryFilter", () => {
  const setSearchOptions = jest.fn();
  const searchOptions = { salary: 50 };

  afterEach(() => {
    setSearchOptions.mockClear();
  });

  it("should render with the correct label", () => {
    const { getByText } = render(
      <SalaryFilter
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
    );

    expect(getByText("Salary")).toBeInTheDocument();
  });

  it("should update the search options when the slider value is changed", () => {
    const { getByRole } = render(
      <SalaryFilter
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
    );

    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: 75 } });

    expect(setSearchOptions).toHaveBeenCalledTimes(1);
    expect(setSearchOptions).toHaveBeenCalledWith({
      ...searchOptions,
      salary: 75,
    });
  });
});
