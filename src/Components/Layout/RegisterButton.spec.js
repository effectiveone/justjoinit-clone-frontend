import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegisterButton from "./RegisterButton";
import { MemoryRouter } from "react-router-dom";

describe("RegisterButton", () => {
  const handleClickMock = jest.fn();

  it("renders the RegisterButton component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <RegisterButton handleClick={handleClickMock} />
      </MemoryRouter>
    );
    const signInButton = getByText("Sing in");
    expect(signInButton).toBeInTheDocument();
  });

  it("opens the menu when the Sign in button is clicked", () => {
    const { getByText, getByRole } = render(
      <RegisterButton handleClick={handleClickMock} />
    );
    const signInButton = getByText("Sing in");

    fireEvent.click(signInButton);

    const menu = getByRole("presentation");
    expect(menu).toBeInTheDocument();
  });

  const menuItems = [
    { label: "As Applicant", path: "/applicantsignup" },
    { label: "As Recruiter", path: "/recruitersignup" },
  ];

  menuItems.forEach(({ label, path }) => {
    it(`calls handleClick function with "${path}" when "${label}" menu item is clicked`, () => {
      const { getByText } = render(
        <RegisterButton handleClick={handleClickMock} />
      );
      const signInButton = getByText("Sing in");

      fireEvent.click(signInButton);

      const menuItem = getByText(label);
      fireEvent.click(menuItem);
      expect(handleClickMock).toHaveBeenCalledWith(path);
    });
  });
});
