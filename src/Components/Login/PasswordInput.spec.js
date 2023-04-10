import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  test("renders label correctly", () => {
    const { getByText } = render(<PasswordInput label="Password" />);
    expect(getByText("Password")).toBeInTheDocument();
  });

  test("shows password correctly", () => {
    const { getByTestId } = render(<PasswordInput />);
    const passwordInput = getByTestId("password-input");
    const showPasswordButton = getByTestId("show-password-button");

    // Password input should be hidden by default
    expect(passwordInput.type).toBe("password");

    // Click show password button to reveal password
    fireEvent.click(showPasswordButton);
    expect(passwordInput.type).toBe("text");

    // Click show password button again to hide password
    fireEvent.click(showPasswordButton);
    expect(passwordInput.type).toBe("password");
  });

  test("calls onChange handler correctly", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <PasswordInput value="test" onChange={mockOnChange} />
    );
    const passwordInput = getByTestId("password-input");

    // Type "password123" into the password input
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // onChange handler should have been called with the updated value
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "password123" } })
    );
  });

  test("displays helper text correctly", () => {
    const { getByText } = render(
      <PasswordInput helperText="Password must be at least 8 characters" />
    );
    expect(
      getByText("Password must be at least 8 characters")
    ).toBeInTheDocument();
  });

  test("displays error message correctly", () => {
    const { getByText } = render(
      <PasswordInput error helperText="Incorrect password" />
    );
    expect(getByText("Incorrect password")).toBeInTheDocument();
  });
});
