import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchField } from "./SearchField";

describe("SearchField", () => {
  const mockSetIsFocused = jest.fn();
  const mockSetSearchOptions = jest.fn();
  const mockGetData = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders SearchField component", () => {
    render(
      <SearchField
        isFocused={false}
        setIsFocused={mockSetIsFocused}
        searchOptions={{}}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    expect(screen.getByPlaceholderText("Search jobs")).toBeInTheDocument();
  });

  test("renders SearchField component with placeholder when focused", () => {
    render(
      <SearchField
        isFocused={true}
        setIsFocused={mockSetIsFocused}
        searchOptions={{}}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    expect(
      screen.getByPlaceholderText("Skill, company, or job title")
    ).toBeInTheDocument();
  });

  test("calls setIsFocused with true on focus", () => {
    render(
      <SearchField
        isFocused={false}
        setIsFocused={mockSetIsFocused}
        searchOptions={{}}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    fireEvent.focus(screen.getByPlaceholderText("Search jobs"));

    expect(mockSetIsFocused).toHaveBeenCalledWith(true);
  });

  test("calls setIsFocused with false on blur", () => {
    render(
      <SearchField
        isFocused={true}
        setIsFocused={mockSetIsFocused}
        searchOptions={{}}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    fireEvent.blur(screen.getByPlaceholderText("Skill, company, or job title"));

    expect(mockSetIsFocused).toHaveBeenCalledWith(false);
  });

  test("calls setSearchOptions with updated searchOptions on change", () => {
    render(
      <SearchField
        isFocused={false}
        setIsFocused={mockSetIsFocused}
        searchOptions={{ query: "" }}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search jobs");
    fireEvent.change(inputElement, { target: { value: "JavaScript" } });

    expect(mockSetSearchOptions).toHaveBeenCalledWith({ query: "JavaScript" });
  });

  test("calls getData on enter press", () => {
    render(
      <SearchField
        isFocused={false}
        setIsFocused={mockSetIsFocused}
        searchOptions={{ query: "JavaScript" }}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search jobs");
    fireEvent.keyPress(inputElement, { key: "Enter", code: "Enter" });

    expect(mockGetData).toHaveBeenCalled();
  });

  test("renders language options on focus", () => {
    render(
      <SearchField
        isFocused={true}
        setIsFocused={mockSetIsFocused}
        searchOptions={{}}
        setSearchOptions={mockSetSearchOptions}
        getData={mockGetData}
      />
    );

    expect(
      screen.getByText("JavaScript", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText("Python", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("React", { exact: false })).toBeInTheDocument();
  });
});
