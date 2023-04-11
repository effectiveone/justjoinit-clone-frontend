import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageGrid from "./LanguageGrid";

describe("LanguageGrid", () => {
  it("renders the correct number of language icons", () => {
    const mockHandleLanguageClick = jest.fn();
    render(<LanguageGrid handleLanguageClick={mockHandleLanguageClick} />);
    const languageIcons = screen.getAllByRole("button");
    expect(languageIcons.length).toEqual(14);
  });

  it("calls handleLanguageClick when a language icon is clicked", () => {
    const mockHandleLanguageClick = jest.fn();
    render(<LanguageGrid handleLanguageClick={mockHandleLanguageClick} />);
    const pythonIcon = screen.getByTitle("Python");
    fireEvent.click(pythonIcon);
    expect(mockHandleLanguageClick).toHaveBeenCalledWith("Python");
  });
});
