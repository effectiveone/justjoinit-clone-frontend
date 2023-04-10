import { render, fireEvent } from "@testing-library/react";
import { JobInput } from "./JobInput";
import { ProfileContext } from "../../Context/ProfileContext";

describe("JobInput", () => {
  const setJobsMock = jest.fn();

  const mockJobs = [
    { jobTitle: "Job 1", salary: "10000", duration: "6" },
    { jobTitle: "Job 2", salary: "20000", duration: "12" },
  ];

  const mockContext = {
    jobs: mockJobs,
    setJobs: setJobsMock,
  };

  beforeEach(() => {
    setJobsMock.mockClear();
  });

  it("renders correctly", () => {
    const { getByLabelText } = render(
      <ProfileContext.Provider value={mockContext}>
        <JobInput />
      </ProfileContext.Provider>
    );

    expect(getByLabelText("Job Title #1")).toBeInTheDocument();
    expect(getByLabelText("Job Title #2")).toBeInTheDocument();
    expect(getByLabelText("Salary")).toBeInTheDocument();
    expect(getByLabelText("Duration")).toBeInTheDocument();
  });

  it("updates job title correctly", () => {
    const { getByLabelText } = render(
      <ProfileContext.Provider value={mockContext}>
        <JobInput />
      </ProfileContext.Provider>
    );

    const jobTitleInput = getByLabelText("Job Title #1");
    fireEvent.change(jobTitleInput, { target: { value: "New Job Title" } });

    expect(setJobsMock).toHaveBeenCalledWith([
      { jobTitle: "New Job Title", salary: "10000", duration: "6" },
      { jobTitle: "Job 2", salary: "20000", duration: "12" },
    ]);
  });

  it("updates salary correctly", () => {
    const { getByLabelText } = render(
      <ProfileContext.Provider value={mockContext}>
        <JobInput />
      </ProfileContext.Provider>
    );

    const salaryInput = getByLabelText("Salary");
    fireEvent.change(salaryInput, { target: { value: "15000" } });

    expect(setJobsMock).toHaveBeenCalledWith([
      { jobTitle: "Job 1", salary: "15000", duration: "6" },
      { jobTitle: "Job 2", salary: "20000", duration: "12" },
    ]);
  });

  it("updates duration correctly", () => {
    const { getByLabelText } = render(
      <ProfileContext.Provider value={mockContext}>
        <JobInput />
      </ProfileContext.Provider>
    );

    const durationInput = getByLabelText("Duration");
    fireEvent.change(durationInput, { target: { value: "9" } });

    expect(setJobsMock).toHaveBeenCalledWith([
      { jobTitle: "Job 1", salary: "10000", duration: "9" },
      { jobTitle: "Job 2", salary: "20000", duration: "12" },
    ]);
  });
});
