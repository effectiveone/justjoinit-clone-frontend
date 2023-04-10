import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApplicationStatusButtonSet from "./ApplicationStatusButtonSet";

describe("ApplicationStatusButtonSet component", () => {
  const mockUpdateStatus = jest.fn();

  beforeEach(() => {
    mockUpdateStatus.mockClear();
  });

  test("renders applied status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="applied"
        updateStatus={mockUpdateStatus}
      />
    );

    const shortlistButton = screen.getByRole("button", { name: "Shortlist" });
    const rejectButton = screen.getByRole("button", { name: "Reject" });

    expect(shortlistButton).toBeInTheDocument();
    expect(rejectButton).toBeInTheDocument();

    userEvent.click(shortlistButton);
    expect(mockUpdateStatus).toHaveBeenCalledTimes(1);
    expect(mockUpdateStatus).toHaveBeenCalledWith("shortlisted");

    userEvent.click(rejectButton);
    expect(mockUpdateStatus).toHaveBeenCalledTimes(1);
    expect(mockUpdateStatus).toHaveBeenCalledWith("rejected");
  });

  test("renders shortlisted status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="shortlisted"
        updateStatus={mockUpdateStatus}
      />
    );

    const acceptButton = screen.getByRole("button", { name: "Accept" });
    const rejectButton = screen.getByRole("button", { name: "Reject" });

    expect(acceptButton).toBeInTheDocument();
    expect(rejectButton).toBeInTheDocument();

    userEvent.click(acceptButton);
    expect(mockUpdateStatus).toHaveBeenCalledTimes(1);
    expect(mockUpdateStatus).toHaveBeenCalledWith("accepted");

    userEvent.click(rejectButton);
    expect(mockUpdateStatus).toHaveBeenCalledTimes(1);
    expect(mockUpdateStatus).toHaveBeenCalledWith("rejected");
  });

  test("renders rejected status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="rejected"
        updateStatus={mockUpdateStatus}
      />
    );

    const rejectedChip = screen.getByText("Rejected");

    expect(rejectedChip).toBeInTheDocument();
  });

  test("renders accepted status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="accepted"
        updateStatus={mockUpdateStatus}
      />
    );

    const acceptedChip = screen.getByText("Accepted");

    expect(acceptedChip).toBeInTheDocument();
  });

  test("renders cancelled status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="cancelled"
        updateStatus={mockUpdateStatus}
      />
    );

    const cancelledChip = screen.getByText("Cancelled");

    expect(cancelledChip).toBeInTheDocument();
  });

  test("renders finished status correctly", () => {
    render(
      <ApplicationStatusButtonSet
        status="finished"
        updateStatus={mockUpdateStatus}
      />
    );

    const finishedChip = screen.getByText("Finished");

    expect(finishedChip).toBeInTheDocument();
  });
});
