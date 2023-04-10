import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterPopup } from "./FilterPopup";
import { JobApplicationContext } from "../../Context/useJobApplicationContext";

const setSearchOptions = jest.fn();
const handleClose = jest.fn();
const getData = jest.fn();
const searchOptions = {
  status: {
    rejected: false,
    applied: false,
    shortlisted: false,
  },
  sort: {
    "jobApplicant.name": {
      status: false,
      desc: false,
    },
    dateOfApplication: {
      status: false,
      desc: false,
    },
    "jobApplicant.rating": {
      status: false,
      desc: false,
    },
  },
};

const renderWithContext = (component) => {
  return render(
    <JobApplicationContext.Provider
      value={{
        open: true,
        handleClose,
        searchOptions,
        setSearchOptions,
        getData,
      }}
    >
      {component}
    </JobApplicationContext.Provider>
  );
};

describe("FilterPopup", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = renderWithContext(<FilterPopup />);
    expect(getByText("Application Status")).toBeInTheDocument();
    expect(getByText("Sort")).toBeInTheDocument();
    expect(getByText("Apply")).toBeInTheDocument();
  });

  it("calls handleClose when modal is closed", () => {
    const { getByRole } = renderWithContext(<FilterPopup />);
    fireEvent.click(getByRole("button", { name: /close/i }));
    expect(handleClose).toHaveBeenCalled();
  });

  it("updates searchOptions when checkboxes are checked/unchecked", () => {
    const { getByLabelText } = renderWithContext(<FilterPopup />);
    fireEvent.click(getByLabelText(/rejected/i));
    expect(setSearchOptions).toHaveBeenCalledWith({
      ...searchOptions,
      status: {
        ...searchOptions.status,
        rejected: true,
      },
    });
  });

  it("updates searchOptions when sort checkboxes are checked/unchecked", () => {
    const { getByLabelText } = renderWithContext(<FilterPopup />);
    fireEvent.click(getByLabelText(/name/i));
    expect(setSearchOptions).toHaveBeenCalledWith({
      ...searchOptions,
      sort: {
        ...searchOptions.sort,
        "jobApplicant.name": {
          ...searchOptions.sort["jobApplicant.name"],
          status: true,
        },
      },
    });
  });

  it("updates searchOptions when sort arrow buttons are clicked", () => {
    const { getByLabelText } = renderWithContext(<FilterPopup />);
    fireEvent.click(getByLabelText(/name/i));
    fireEvent.click(getByLabelText(/name/i).nextSibling);
    expect(setSearchOptions).toHaveBeenCalledWith({
      ...searchOptions,
      sort: {
        ...searchOptions.sort,
        "jobApplicant.name": {
          ...searchOptions.sort["jobApplicant.name"],
          desc: true,
        },
      },
    });
  });

  it("calls getData when Apply button is clicked", () => {
    const { getByRole } = renderWithContext(<FilterPopup />);
    fireEvent.click(getByRole("button", { name: /apply/i }));
    expect(getData).toHaveBeenCalled();
  });
});
