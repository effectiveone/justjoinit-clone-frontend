import { render, screen } from "@testing-library/react";
import { JobContainer } from "./JobContainer";

test("displays message when there are no jobs", () => {
  const { getByText } = render(<JobContainer />);
  const noJobsMessage = getByText("No jobs found");
  expect(noJobsMessage).toBeInTheDocument();
});
