import { render, screen, fireEvent } from "@testing-library/react";
import { Applicants } from "./Applicants";
import { useApplicantContext } from "../../Context/useApplicantContext";

// mock the custom hook
jest.mock("../../Context/useApplicantContext");

describe("Applicants", () => {
  const mockApplications = [
    { id: 1, name: "John Doe", position: "Software Engineer" },
    { id: 2, name: "Jane Doe", position: "UI/UX Designer" },
  ];

  beforeEach(() => {
    // reset mock before each test
    jest.resetAllMocks();
  });

  test("renders the component with no applications", () => {
    // set the mock context value to an empty array of applications
    useApplicantContext.mockReturnValue({
      applications: [],
      filterOpen: false,
      setFilterOpen: jest.fn(),
      searchOptions: {},
      setSearchOptions: jest.fn(),
      getData: jest.fn(),
    });

    render(<Applicants />);

    // check that the title and "No Applications Found" text are rendered
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Employees"
    );
    expect(screen.getByText("No Applications Found")).toBeInTheDocument();
  });

  test("renders the component with applications", () => {
    // set the mock context value to an array of applications
    useApplicantContext.mockReturnValue({
      applications: mockApplications,
      filterOpen: false,
      setFilterOpen: jest.fn(),
      searchOptions: {},
      setSearchOptions: jest.fn(),
      getData: jest.fn(),
    });

    render(<Applicants />);

    // check that the title and application titles are rendered
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Employees"
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("UI/UX Designer")).toBeInTheDocument();
  });

  test("opens the filter popup when the filter icon is clicked", () => {
    const mockSetFilterOpen = jest.fn();
    useApplicantContext.mockReturnValue({
      applications: mockApplications,
      filterOpen: false,
      setFilterOpen: mockSetFilterOpen,
      searchOptions: {},
      setSearchOptions: jest.fn(),
      getData: jest.fn(),
    });

    render(<Applicants />);

    // simulate clicking the filter icon
    fireEvent.click(screen.getByRole("button", { name: "Filter" }));

    // check that the setFilterOpen function was called with true
    expect(mockSetFilterOpen).toHaveBeenCalledWith(true);
  });
});
