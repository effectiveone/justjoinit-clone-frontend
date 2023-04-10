import React from "react";
import { render } from "@testing-library/react";
import JobListing from "./JobListing";

describe("JobListing", () => {
  const job = {
    id: "1",
    title: "Front-end Developer",
    company: "Example Company",
    position: "Full-time",
    salary: "$80k - $120k",
    techStack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    locations: ["San Francisco", "Remote"],
    dateOfPosting: "2022-04-01",
    remote: true,
    featured: true,
  };

  it("renders all the required job details", () => {
    const { getByText } = render(<JobListing job={job} />);

    expect(getByText(job.title)).toBeInTheDocument();
    expect(getByText(job.company)).toBeInTheDocument();
    expect(getByText(job.position)).toBeInTheDocument();
    expect(getByText(job.salary)).toBeInTheDocument();
    expect(getByText(job.locations[0])).toBeInTheDocument();
    expect(getByText(job.locations[1])).toBeInTheDocument();
    expect(getByText(job.techStack[0].name)).toBeInTheDocument();
    expect(getByText(job.techStack[1].name)).toBeInTheDocument();
    expect(getByText(job.techStack[2].name)).toBeInTheDocument();
    expect(getByText(job.techStack[3].name)).toBeInTheDocument();
    expect(getByText(job.dateOfPosting)).toBeInTheDocument();
  });

  it("renders remote label when job is fully remote", () => {
    const { getByText } = render(<JobListing job={job} />);

    expect(getByText("Fully remote")).toBeInTheDocument();
  });

  it("does not render remote label when job is not fully remote", () => {
    const { queryByText } = render(
      <JobListing job={{ ...job, remote: false }} />
    );

    expect(queryByText("Fully remote")).not.toBeInTheDocument();
  });

  it("renders featured style when job is featured", () => {
    const { getByTestId } = render(<JobListing job={job} />);

    expect(getByTestId("featured")).toHaveClass("featured");
  });

  it("does not render featured style when job is not featured", () => {
    const { queryByTestId } = render(
      <JobListing job={{ ...job, featured: false }} />
    );

    expect(queryByTestId("featured")).toBeNull();
  });
});
