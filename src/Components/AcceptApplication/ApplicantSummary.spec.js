import { render, screen, fireEvent } from "@testing-library/react";
import { ApplicantContextProvider } from "../../Context/useApplicantContext";
import ApplicantSummary from "./ApplicantSummary";

describe("ApplicantSummary", () => {
  it("displays the applicant's name", () => {
    const applications = {
      jobApplicant: { name: "John Smith" },
      job: { title: "Software Engineer", jobType: "Full-Time" },
      sop: "I am passionate about programming.",
    };
    const { container } = render(
      <ApplicantContextProvider value={{ applications }}>
        <ApplicantSummary />
      </ApplicantContextProvider>
    );
    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });

  it("displays the rating", () => {
    const applications = {
      jobApplicant: { rating: 4 },
      job: { title: "Software Engineer", jobType: "Full-Time" },
      sop: "I am passionate about programming.",
    };
    const { container } = render(
      <ApplicantContextProvider value={{ applications }}>
        <ApplicantSummary />
      </ApplicantContextProvider>
    );
    expect(screen.getByRole("img", { name: "4 Star" })).toBeInTheDocument();
  });

  it("displays the job title", () => {
    const applications = {
      jobApplicant: { name: "John Smith" },
      job: { title: "Software Engineer", jobType: "Full-Time" },
      sop: "I am passionate about programming.",
    };
    const { container } = render(
      <ApplicantContextProvider value={{ applications }}>
        <ApplicantSummary />
      </ApplicantContextProvider>
    );
    expect(
      screen.getByText("Job Title: Software Engineer")
    ).toBeInTheDocument();
  });

  it("displays the role", () => {
    const applications = {
      jobApplicant: { name: "John Smith" },
      job: { title: "Software Engineer", jobType: "Full-Time" },
      sop: "I am passionate about programming.",
    };
    const { container } = render(
      <ApplicantContextProvider value={{ applications }}>
        <ApplicantSummary />
      </ApplicantContextProvider>
    );
    expect(screen.getByText("Role: Full-Time")).toBeInTheDocument();
  });
});
