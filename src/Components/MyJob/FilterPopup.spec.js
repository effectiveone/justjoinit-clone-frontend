import { render, fireEvent } from "@testing-library/react";
import { FilterPopup } from "./FilterPopup";

describe("FilterPopup component", () => {
  it("renders an Apply button", () => {
    const { getByText } = render(<FilterPopup />);
    const applyButton = getByText("Apply");
    expect(applyButton).toBeInTheDocument();
  });

  it("calls the getData function when Apply button is clicked", () => {
    const mockGetData = jest.fn();
    const { getByText } = render(<FilterPopup getData={mockGetData} />);
    const applyButton = getByText("Apply");
    fireEvent.click(applyButton);
    expect(mockGetData).toHaveBeenCalledTimes(1);
  });
});
