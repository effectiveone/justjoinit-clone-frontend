import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SortFilter } from "./SortFilter";

describe("SortFilter", () => {
  it("should render checkboxes for each sort option", () => {
    const { getByLabelText } = render(
      <SortFilter searchOptions={{ sort: {} }} setSearchOptions={() => {}} />
    );

    expect(getByLabelText("Salary")).toBeInTheDocument();
    expect(getByLabelText("Duration")).toBeInTheDocument();
    expect(getByLabelText("Rating")).toBeInTheDocument();
  });

  it("should update searchOptions when checkbox is checked", () => {
    const setSearchOptions = jest.fn();
    const { getByLabelText } = render(
      <SortFilter
        searchOptions={{ sort: {} }}
        setSearchOptions={setSearchOptions}
      />
    );

    fireEvent.click(getByLabelText("Salary"));

    expect(setSearchOptions).toHaveBeenCalledWith({
      sort: {
        salary: {
          status: true,
          desc: false,
        },
      },
    });
  });

  it("should disable arrow buttons when checkbox is unchecked", () => {
    const { getByLabelText, getByTestId } = render(
      <SortFilter searchOptions={{ sort: {} }} setSearchOptions={() => {}} />
    );

    fireEvent.click(getByLabelText("Salary"));

    expect(getByTestId("salary-arrow-up")).not.toBeDisabled();
    expect(getByTestId("salary-arrow-down")).not.toBeDisabled();

    fireEvent.click(getByLabelText("Salary"));

    expect(getByTestId("salary-arrow-up")).toBeDisabled();
    expect(getByTestId("salary-arrow-down")).toBeDisabled();
  });

  it("should update searchOptions when arrow button is clicked", () => {
    const setSearchOptions = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <SortFilter
        searchOptions={{ sort: { salary: { status: true } } }}
        setSearchOptions={setSearchOptions}
      />
    );

    fireEvent.click(getByTestId("salary-arrow-down"));

    expect(setSearchOptions).toHaveBeenCalledWith({
      sort: {
        salary: {
          status: true,
          desc: true,
        },
      },
    });

    fireEvent.click(getByTestId("salary-arrow-up"));

    expect(setSearchOptions).toHaveBeenCalledWith({
      sort: {
        salary: {
          status: true,
          desc: false,
        },
      },
    });
  });
});
