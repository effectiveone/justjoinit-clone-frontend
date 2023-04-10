import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RatingModal from "./RatingModal";
import { ApplicantContext } from "../../Context/useApplicantContext";

describe("RatingModal component", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = render(
      <ApplicantContext.Provider
        value={{
          open: true,
          rating: 3,
          setRating: jest.fn(),
          changeRating: jest.fn(),
          handleClose: jest.fn(),
        }}
      >
        <RatingModal />
      </ApplicantContext.Provider>
    );

    expect(getByText("Submit")).toBeInTheDocument();
    expect(getByRole("slider")).toBeInTheDocument();
  });

  it("calls setRating function on rating change", () => {
    const setRatingMock = jest.fn();

    const { getByRole } = render(
      <ApplicantContext.Provider
        value={{
          open: true,
          rating: 3,
          setRating: setRatingMock,
          changeRating: jest.fn(),
          handleClose: jest.fn(),
        }}
      >
        <RatingModal />
      </ApplicantContext.Provider>
    );

    fireEvent.change(getByRole("slider"), { target: { value: 4 } });

    expect(setRatingMock).toHaveBeenCalledWith(4);
  });

  it("calls changeRating function on submit button click", () => {
    const changeRatingMock = jest.fn();

    const { getByText } = render(
      <ApplicantContext.Provider
        value={{
          open: true,
          rating: 3,
          setRating: jest.fn(),
          changeRating: changeRatingMock,
          handleClose: jest.fn(),
        }}
      >
        <RatingModal />
      </ApplicantContext.Provider>
    );

    fireEvent.click(getByText("Submit"));

    expect(changeRatingMock).toHaveBeenCalled();
  });

  it("calls handleClose function on modal close", () => {
    const handleCloseMock = jest.fn();

    const { getByRole } = render(
      <ApplicantContext.Provider
        value={{
          open: true,
          rating: 3,
          setRating: jest.fn(),
          changeRating: jest.fn(),
          handleClose: handleCloseMock,
        }}
      >
        <RatingModal />
      </ApplicantContext.Provider>
    );

    fireEvent.click(getByRole("button"));

    expect(handleCloseMock).toHaveBeenCalled();
  });
});
