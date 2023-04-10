import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useMyJobContext } from "../../Context/useMyJobContext";
import MyJobs from "./MyJobs";

jest.mock("../../Context/useMyJobContext");

describe("MyJobs", () => {
  const mockJobs = [
    {
      _id: "1",
      title: "Software Engineer",
      company: "Google",
      location: "New York, NY",
      type: "Full Time",
    },
    {
      _id: "2",
      title: "Product Manager",
      company: "Facebook",
      location: "San Francisco, CA",
      type: "Part Time",
    },
  ];

  const mockSetSearchOptions = jest.fn();
  const mockGetData = jest.fn();
  const mockSetFilterOpen = jest.fn();
  const mockUseMyJobContext = () => ({
    jobs: mockJobs,
    filterOpen: false,
    setFilterOpen: mockSetFilterOpen,
    searchOptions: { query: "" },
    setSearchOptions: mockSetSearchOptions,
    getData: mockGetData,
  });

  beforeEach(() => {
    mockSetSearchOptions.mockClear();
    mockGetData.mockClear();
    mockSetFilterOpen.mockClear();
    useMyJobContext.mockImplementation(mockUseMyJobContext);
  });

  test("renders job tiles when jobs exist", () => {
    render(<MyJobs />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Product Manager")).toBeInTheDocument();
  });

  test("renders 'No jobs found' when no jobs exist", () => {
    useMyJobContext.mockImplementation(() => ({
      jobs: [],
      filterOpen: false,
      setFilterOpen: mockSetFilterOpen,
      searchOptions: { query: "" },
      setSearchOptions: mockSetSearchOptions,
      getData: mockGetData,
    }));

    render(<MyJobs />);
    expect(screen.getByText("No jobs found")).toBeInTheDocument();
  });

  test("calls setSearchOptions on search input change", () => {
    render(<MyJobs />);
    const searchInput = screen.getByLabelText("Search Jobs");
    fireEvent.change(searchInput, { target: { value: "Software" } });
    expect(mockSetSearchOptions).toHaveBeenCalledWith({
      query: "Software",
    });
  });

  test("calls getData on search input Enter key press", () => {
    render(<MyJobs />);
    const searchInput = screen.getByLabelText("Search Jobs");
    fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });
    expect(mockGetData).toHaveBeenCalled();
  });

  test("calls getData on search button click", () => {
    render(<MyJobs />);
    const searchButton = screen.getByRole("button", { name: "search" });
    fireEvent.click(searchButton);
    expect(mockGetData).toHaveBeenCalled();
  });

  test("opens filter popup on filter icon button click", () => {
    render(<MyJobs />);
    const filterIconButton = screen.getByRole("button", {
      name: "filter list",
    });
    fireEvent.click(filterIconButton);
    expect(mockSetFilterOpen).toHaveBeenCalledWith(true);
  });
});
