import { render } from "@testing-library/react";
import { JobDetails } from "./JobDetails";

describe("JobDetails component", () => {
  it("renders correctly with job props", () => {
    const job = {
      title: "Software Engineer",
      recruiter: { name: "John Smith" },
      jobType: "Full-time",
      salary: 5000,
      duration: 12,
      skillsets: ["React", "Node.js", "MongoDB"],
    };
    const { getByText, getAllByRole } = render(<JobDetails job={job} />);
    expect(getByText("Software Engineer")).toBeInTheDocument();
    expect(getByText("Posted By: John Smith")).toBeInTheDocument();
    expect(getByText("Role : Full-time")).toBeInTheDocument();
    expect(getByText("Salary : ₹ 5000 per month")).toBeInTheDocument();
    expect(getByText("Duration : 12 months")).toBeInTheDocument();
    const chips = getAllByRole("button");
    expect(chips.length).toBe(3);
    expect(chips[0]).toHaveTextContent("React");
    expect(chips[1]).toHaveTextContent("Node.js");
    expect(chips[2]).toHaveTextContent("MongoDB");
  });

  it("renders correctly without job props", () => {
    const { container } = render(<JobDetails />);
    expect(container.firstChild).toBeNull();
  });
});
