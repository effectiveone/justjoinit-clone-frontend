import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DecisionModal from "./DecisionModal";
import { useApplicantContext } from "../../Context/useApplicantContext";

jest.mock("../../Context/useApplicantContext");

describe("DecisionModal component", () => {
  beforeEach(() => {
    useApplicantContext.mockReturnValue({
      openEndJob: true,
      handleCloseEndJob: jest.fn(),
      updateStatus: jest.fn(),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the modal with title and buttons", () => {
    render(<DecisionModal />);

    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("should call the updateStatus function when clicking on the 'Yes' button", () => {
    render(<DecisionModal />);

    const yesButton = screen.getByText("Yes");

    fireEvent.click(yesButton);

    expect(useApplicantContext().updateStatus).toHaveBeenCalledWith("finished");
  });

  it("should call the handleCloseEndJob function when clicking on the 'Cancel' button", () => {
    render(<DecisionModal />);

    const cancelButton = screen.getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(useApplicantContext().handleCloseEndJob).toHaveBeenCalled();
  });
});
