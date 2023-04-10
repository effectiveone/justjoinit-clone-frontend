import { render, screen, fireEvent } from "@testing-library/react";
import { JobApplicationContextProvider } from "../../Context/useJobApplicationContext";
import JobApplications from "./JobApplications";

const applications = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    dateOfApplication: "2022-01-01",
    status: "applied",
    jobApplicant: {
      name: "John Doe",
      rating: 4,
    },
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    dateOfApplication: "2022-01-02",
    status: "shortlisted",
    jobApplicant: {
      name: "Jane Doe",
      rating: 5,
    },
  },
];

describe("JobApplications", () => {
  it("should render the heading 'Applications'", () => {
    render(
      <JobApplicationContextProvider>
        <JobApplications />
      </JobApplicationContextProvider>
    );

    const heading = screen.getByText("Applications");

    expect(heading).toBeInTheDocument();
  });

  it("should render a list of job applications", () => {
    render(
      <JobApplicationContextProvider applications={applications}>
        <JobApplications />
      </JobApplicationContextProvider>
    );

    const applicationTiles = screen.getAllByTestId("application-tile");

    expect(applicationTiles.length).toBe(applications.length);
  });

  it("should display a message when there are no applications", () => {
    render(
      <JobApplicationContextProvider>
        <JobApplications />
      </JobApplicationContextProvider>
    );

    const message = screen.getByText("No Applications Found");

    expect(message).toBeInTheDocument();
  });

  it("should open the filter popup when the filter icon is clicked", () => {
    render(
      <JobApplicationContextProvider>
        <JobApplications />
      </JobApplicationContextProvider>
    );

    const filterIcon = screen.getByRole("button");

    fireEvent.click(filterIcon);

    const popupHeading = screen.getByText("Application Status");

    expect(popupHeading).toBeInTheDocument();
  });
});
