import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RecruterButtons from "./RecruterButtons";

describe("RecruterButtons", () => {
  const handleClickMock = jest.fn();

  beforeEach(() => {
    render(<RecruterButtons handleClick={handleClickMock} />);
  });

  test("renders RecruterButtons when the user is authenticated as a recruiter", () => {
    const recruiterButtons = screen.getByTestId("mock-recruiter-buttons");
    expect(recruiterButtons).toBeInTheDocument();
  });

  it("renders the RecruterButtons component", () => {
    const recruterButtons = screen.getByRole("presentation");
    expect(recruterButtons).toBeInTheDocument();
  });

  it("renders the correct number of buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(6);
  });

  const buttonTests = [
    { label: "Home", path: "/home" },
    { label: "Add Jobs", path: "/addjob" },
    { label: "My Jobs", path: "/myjobs" },
    { label: "Employees", path: "/employees" },
    { label: "Profile", path: "/profile" },
    { label: "Logout", path: "/logout" },
  ];

  buttonTests.forEach(({ label, path }) => {
    it(`calls handleClick function with "${path}" when ${label} button is clicked`, () => {
      const button = screen.getByText(label);
      fireEvent.click(button);
      expect(handleClickMock).toHaveBeenCalledWith(path);
    });
  });
});
