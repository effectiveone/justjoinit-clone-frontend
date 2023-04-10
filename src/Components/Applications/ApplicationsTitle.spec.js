import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ApplicationTitle } from "./ApplicationTitle";
import { PopupContext } from "../../Context/usePopupContext";

jest.mock("axios");

describe("ApplicationTitle", () => {
  const application = {
    job: {
      _id: "1",
      rating: 3,
    },
    status: "accepted",
  };

  it("renders job details and status", () => {
    render(<ApplicationTitle application={application} />);
    expect(screen.getByText("Job Details")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders rate job button when status is accepted or finished", () => {
    render(<ApplicationTitle application={application} />);
    const rateJobButton = screen.getByText("Rate Job");
    expect(rateJobButton).toBeInTheDocument();
    fireEvent.click(rateJobButton);
    expect(screen.getByText("Rate this job")).toBeInTheDocument();
  });

  it("does not render rate job button when status is not accepted or finished", () => {
    const application = { job: { _id: "1", rating: 3 }, status: "pending" };
    render(<ApplicationTitle application={application} />);
    const rateJobButton = screen.queryByText("Rate Job");
    expect(rateJobButton).not.toBeInTheDocument();
  });

  it("calls API to fetch job rating when rate job button is clicked", async () => {
    const mockGet = jest.fn().mockResolvedValueOnce({ data: { rating: 3 } });
    jest.mock("axios", () => ({ get: mockGet }));

    render(
      <PopupContext.Provider value={{ setPopup: jest.fn() }}>
        <ApplicationTitle application={application} />
      </PopupContext.Provider>
    );

    const rateJobButton = screen.getByText("Rate Job");
    fireEvent.click(rateJobButton);

    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/rating?id=${application.job._id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  });

  it("displays error popup when API call fails", async () => {
    jest.mock("axios", () => ({
      get: jest
        .fn()
        .mockRejectedValueOnce({ response: { data: { message: "Error" } } }),
    }));

    const setPopup = jest.fn();
    render(
      <PopupContext.Provider value={{ setPopup }}>
        <ApplicationTitle application={application} />
      </PopupContext.Provider>
    );

    const rateJobButton = screen.getByText("Rate Job");
    fireEvent.click(rateJobButton);

    expect(setPopup).toHaveBeenCalledTimes(1);
    expect(setPopup).toHaveBeenCalledWith({
      open: true,
      severity: "error",
      message: "Error",
    });
  });
});
