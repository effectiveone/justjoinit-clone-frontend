import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterPopup } from "./FilterPopup";

const searchOptions = {
  sort: {
    "jobApplicant.name": {
      status: true,
      desc: false,
    },
    "job.title": {
      status: false,
      desc: false,
    },
    dateOfJoining: {
      status: true,
      desc: true,
    },
    "jobApplicant.rating": {
      status: true,
      desc: false,
    },
  },
};

test("renders FilterPopup component", () => {
  render(
    <FilterPopup
      open={true}
      handleClose={() => {}}
      searchOptions={searchOptions}
      setSearchOptions={() => {}}
      getData={() => {}}
    />
  );
  const sortCheckboxes = screen.getAllByRole("checkbox");
  expect(sortCheckboxes.length).toBe(4);
  expect(screen.getByText(/Sort/i)).toBeInTheDocument();
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Job Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Date of Joining/i)).toBeInTheDocument();
  expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  expect(screen.getByText(/Apply/i)).toBeInTheDocument();
});

test("updates searchOptions state on checkbox change", () => {
  const setSearchOptionsMock = jest.fn();
  render(
    <FilterPopup
      open={true}
      handleClose={() => {}}
      searchOptions={searchOptions}
      setSearchOptions={setSearchOptionsMock}
      getData={() => {}}
    />
  );
  const nameCheckbox = screen.getByLabelText(/Name/i);
  fireEvent.click(nameCheckbox);
  expect(setSearchOptionsMock).toHaveBeenCalledWith({
    ...searchOptions,
    sort: {
      ...searchOptions.sort,
      "jobApplicant.name": {
        ...searchOptions.sort["jobApplicant.name"],
        status: !searchOptions.sort["jobApplicant.name"].status,
      },
    },
  });
});

test("updates searchOptions state on sort direction change", () => {
  const setSearchOptionsMock = jest.fn();
  render(
    <FilterPopup
      open={true}
      handleClose={() => {}}
      searchOptions={searchOptions}
      setSearchOptions={setSearchOptionsMock}
      getData={() => {}}
    />
  );
  const nameCheckbox = screen.getByLabelText(/Name/i);
  const nameSortButton = screen.getAllByRole("button", {
    name: /Sort Direction/i,
  })[0];
  fireEvent.click(nameCheckbox);
  fireEvent.click(nameSortButton);
  expect(setSearchOptionsMock).toHaveBeenCalledWith({
    ...searchOptions,
    sort: {
      ...searchOptions.sort,
      "jobApplicant.name": {
        ...searchOptions.sort["jobApplicant.name"],
        desc: !searchOptions.sort["jobApplicant.name"].desc,
      },
    },
  });
});

test("calls getData prop on Apply button click", () => {
  const getDataMock = jest.fn();
  render(
    <FilterPopup
      open={true}
      handleClose={() => {}}
      searchOptions={searchOptions}
      setSearchOptions={() => {}}
      getData={getDataMock}
    />
  );
  const applyButton = screen.getByRole("button", { name: /Apply/i });
  fireEvent.click(applyButton);
  expect(getDataMock).toHaveBeenCalledTimes(1);
});
