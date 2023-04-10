import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NoLoginButtons from "./noLoginButtons";
import RegisterButton from "./RegisterButton";

jest.mock("./RegisterButton");

describe("NoLoginButtons", () => {
  const handleClickMock = jest.fn();

  it("renders the NoLoginButtons component", () => {
    render(<NoLoginButtons handleClick={handleClickMock} />);
    const noLoginButtons = screen.getByRole("presentation");
    expect(noLoginButtons).toBeInTheDocument();
  });

  it("renders the correct number of links and buttons", () => {
    render(<NoLoginButtons handleClick={handleClickMock} />);
    const links = screen.getAllByRole("link");
    const buttons = screen.getAllByRole("button");
    expect(links.length).toBe(4);
    expect(buttons.length).toBe(1);
  });

  it("calls handleClick function when Login button is clicked", () => {
    render(<NoLoginButtons handleClick={handleClickMock} />);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(handleClickMock).toHaveBeenCalledWith("/login");
  });

  it("renders RegisterButton and passes handleClick function", () => {
    RegisterButton.mockImplementation(({ handleClick }) => {
      return <button onClick={() => handleClick("/register")}>Register</button>;
    });

    render(<NoLoginButtons handleClick={handleClickMock} />);
    const registerButton = screen.getByText("Register");
    fireEvent.click(registerButton);
    expect(handleClickMock).toHaveBeenCalledWith("/register");
  });
});
