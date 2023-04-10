import { render, screen, fireEvent } from "@testing-library/react";
import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  const handleChange = jest.fn();
  const handleInputError = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleInputError.mockClear();
  });

  it("renders correctly", () => {
    const { getByLabelText } = render(
      <EmailInput label="Email" value="" onChange={handleChange} />
    );
    expect(getByLabelText("Email")).toBeInTheDocument();
  });

  it("displays an error message when the email format is incorrect", () => {
    const { getByLabelText, getByText } = render(
      <EmailInput
        label="Email"
        value="invalidemail"
        onChange={handleChange}
        handleInputError={handleInputError}
      />
    );
    const input = getByLabelText("Email");
    fireEvent.blur(input);
    expect(handleInputError).toHaveBeenCalledWith(
      "email",
      true,
      "Incorrect email format"
    );
    expect(getByText("Incorrect email format")).toBeInTheDocument();
  });

  it("displays an error message when the email is required and the field is empty", () => {
    const { getByLabelText, getByText } = render(
      <EmailInput
        label="Email"
        value=""
        onChange={handleChange}
        handleInputError={handleInputError}
        required
      />
    );
    const input = getByLabelText("Email");
    fireEvent.blur(input);
    expect(handleInputError).toHaveBeenCalledWith(
      "email",
      true,
      "Email is required"
    );
    expect(getByText("Email is required")).toBeInTheDocument();
  });

  it("does not display an error message when the email format is correct", () => {
    const { getByLabelText, queryByText } = render(
      <EmailInput
        label="Email"
        value="validemail@example.com"
        onChange={handleChange}
        handleInputError={handleInputError}
      />
    );
    const input = getByLabelText("Email");
    fireEvent.blur(input);
    expect(handleInputError).toHaveBeenCalledWith("email", false, "");
    expect(queryByText("Incorrect email format")).toBeNull();
  });

  it("does not display an error message when the email is not required and the field is empty", () => {
    const { getByLabelText, queryByText } = render(
      <EmailInput
        label="Email"
        value=""
        onChange={handleChange}
        handleInputError={handleInputError}
      />
    );
    const input = getByLabelText("Email");
    fireEvent.blur(input);
    expect(handleInputError).toHaveBeenCalledWith("email", false, "");
    expect(queryByText("Email is required")).toBeNull();
  });

  it("calls the onChange function when the input value changes", () => {
    const { getByLabelText } = render(
      <EmailInput label="Email" value="" onChange={handleChange} />
    );
    const input = getByLabelText("Email");
    fireEvent.change(input, { target: { value: "newemail@example.com" } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
