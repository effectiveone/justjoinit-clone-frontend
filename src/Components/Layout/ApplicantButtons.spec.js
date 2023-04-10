import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ApplicantButtons } from "./ApplicantButtons";

describe("ApplicantButtons", () => {
  it("should call handleClick with '/home' when 'Home' button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ApplicantButtons handleClick={handleClick} />);
    const homeButton = getByText("Home");
    fireEvent.click(homeButton);
    expect(handleClick).toHaveBeenCalledWith("/home");
  });

  it("should call handleClick with '/applications' when 'Applications' button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ApplicantButtons handleClick={handleClick} />);
    const applicationsButton = getByText("Applications");
    fireEvent.click(applicationsButton);
    expect(handleClick).toHaveBeenCalledWith("/applications");
  });

  it("should call handleClick with '/profile' when 'Profile' button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ApplicantButtons handleClick={handleClick} />);
    const profileButton = getByText("Profile");
    fireEvent.click(profileButton);
    expect(handleClick).toHaveBeenCalledWith("/profile");
  });

  it("should call handleClick with '/logout' when 'Logout' button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ApplicantButtons handleClick={handleClick} />);
    const logoutButton = getByText("Logout");
    fireEvent.click(logoutButton);
    expect(handleClick).toHaveBeenCalledWith("/logout");
  });
});
