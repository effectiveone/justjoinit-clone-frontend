import { render, screen, fireEvent } from "@testing-library/react";
import CustomSelectButton from "./CustomSelectButton";

describe("CustomSelectButton", () => {
  test("renders the button", () => {
    render(<CustomSelectButton />);
    const buttonElement = screen.getByText(/Location/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("opens the modal when the button is clicked", () => {
    render(<CustomSelectButton />);
    const buttonElement = screen.getByText(/Location/i);
    fireEvent.click(buttonElement);
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  test("closes the modal when the close button is clicked", () => {
    render(<CustomSelectButton />);
    const buttonElement = screen.getByText(/Location/i);
    fireEvent.click(buttonElement);
    const closeButtonElement = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButtonElement);
    const modalElement = screen.queryByRole("dialog");
    expect(modalElement).not.toBeInTheDocument();
  });
});
