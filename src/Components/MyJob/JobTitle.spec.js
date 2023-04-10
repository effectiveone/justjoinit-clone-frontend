import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { JobTile } from "./JobTile";

describe("JobTile", () => {
  const job = {
    _id: "1",
    title: "Test Job",
    rating: 3,
    jobType: "Full Time",
    salary: 50000,
    duration: 12,
    maxApplicants: 10,
    maxPositions: 5,
    acceptedCandidates: 2,
    skillsets: ["React", "Node.js"],
  };

  const getData = jest.fn();

  test("renders job title", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobTitle = screen.getByText(/Test Job/i);
    expect(jobTitle).toBeInTheDocument();
  });

  test("renders job rating", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobRating = screen.getByRole("img");
    expect(jobRating).toBeInTheDocument();
  });

  test("renders job type", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobType = screen.getByText(/Full Time/i);
    expect(jobType).toBeInTheDocument();
  });

  test("renders job salary", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobSalary = screen.getByText(/50000 per month/i);
    expect(jobSalary).toBeInTheDocument();
  });

  test("renders job duration", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobDuration = screen.getByText(/12 month/i);
    expect(jobDuration).toBeInTheDocument();
  });

  test("renders job skillsets", () => {
    render(<JobTile job={job} getData={getData} />);
    const jobSkillsets = screen.getByText(/React/i);
    expect(jobSkillsets).toBeInTheDocument();
  });

  test("renders job actions", () => {
    render(<JobTile job={job} getData={getData} />);
    const viewApplicationsButton = screen.getByText(/View Applications/i);
    const updateDetailsButton = screen.getByText(/Update Details/i);
    const deleteJobButton = screen.getByText(/Delete Job/i);

    expect(viewApplicationsButton).toBeInTheDocument();
    expect(updateDetailsButton).toBeInTheDocument();
    expect(deleteJobButton).toBeInTheDocument();
  });

  test("clicking view applications button calls handleClick", () => {
    const handleClick = jest.fn();
    render(<JobTile job={job} getData={getData} handleClick={handleClick} />);
    const viewApplicationsButton = screen.getByText(/View Applications/i);
    fireEvent.click(viewApplicationsButton);
    expect(handleClick).toHaveBeenCalledWith("/job/applications/1");
  });

  test("clicking update details button opens update modal", () => {
    render(<JobTile job={job} getData={getData} />);
    const updateDetailsButton = screen.getByText(/Update Details/i);
    fireEvent.click(updateDetailsButton);
    const updateModal = screen.getByText(/Update Details/i);
    expect(updateModal).toBeInTheDocument();
  });

  test("clicking delete job button opens delete modal", () => {
    render(<JobTile job={job} getData={getData} />);
    const deleteJobButton = screen.getByText(/Delete Job/i);
    fireEvent.click(deleteJobButton);
    const deleteModal = screen.getByText(/Are you sure?/i);
    expect(deleteModal).toBeInTheDocument();
  });
});
