import { render } from "@testing-library/react";
import { JobStatus } from "./JobStatus";

describe("JobStatus", () => {
  it("renders the status correctly", () => {
    const { getByText } = render(<JobStatus status="accepted" />);
    const statusElement = getByText("accepted");
    expect(statusElement).toBeInTheDocument();
  });

  it("applies the correct background color based on the status", () => {
    const { container } = render(<JobStatus status="accepted" />);
    const statusBlock = container.firstChild;
    expect(statusBlock).toHaveStyle("background-color: #3f51b5");
  });
});
