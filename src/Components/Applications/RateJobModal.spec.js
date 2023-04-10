import { render, fireEvent } from "@testing-library/react";
import RateJobModal from "./RateJobModal";

describe("RateJobModal", () => {
  const handleClose = jest.fn();
  const handleRatingChange = jest.fn();
  const handleRatingSubmit = jest.fn();

  it("renders the component with given rating", () => {
    const rating = 3;
    const { getByLabelText } = render(
      <RateJobModal
        open={true}
        handleClose={handleClose}
        handleRatingChange={handleRatingChange}
        handleRatingSubmit={handleRatingSubmit}
        rating={rating}
      />
    );
    expect(getByLabelText(`${rating} stars`)).toBeInTheDocument();
  });

  it("calls handleRatingChange when the rating is changed", () => {
    const { getByLabelText } = render(
      <RateJobModal
        open={true}
        handleClose={handleClose}
        handleRatingChange={handleRatingChange}
        handleRatingSubmit={handleRatingSubmit}
        rating={-1}
      />
    );
    fireEvent.click(getByLabelText("3 stars"));
    expect(handleRatingChange).toHaveBeenCalledWith(3);
  });

  it("calls handleRatingSubmit when the submit button is clicked", () => {
    const { getByText } = render(
      <RateJobModal
        open={true}
        handleClose={handleClose}
        handleRatingChange={handleRatingChange}
        handleRatingSubmit={handleRatingSubmit}
        rating={3}
      />
    );
    fireEvent.click(getByText("Submit"));
    expect(handleRatingSubmit).toHaveBeenCalled();
  });
});
