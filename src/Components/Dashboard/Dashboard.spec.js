import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import { DashboardContextProvider } from "../../Context/useDashboardContext";

describe("Dashboard", () => {
  it("renders without errors", () => {
    render(
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    );
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("More filters")).toBeInTheDocument();
  });

  it("opens the filter popup when 'More filters' button is clicked", () => {
    render(
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    );
    const filterButton = screen.getByText("More filters");
    fireEvent.click(filterButton);
    expect(screen.getByText("Filter Jobs")).toBeInTheDocument();
  });

  it("opens the search field when the component is focused", () => {
    render(
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    );
    const searchField = screen.getByPlaceholderText(
      "Search by job title or company"
    );
    expect(searchField).not.toBe(document.activeElement);
    fireEvent.focus(searchField);
    expect(searchField).toBe(document.activeElement);
  });

  it("opens the language select popup when the 'Location' button is clicked", () => {
    render(
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    );
    const locationButton = screen.getByText("Location");
    fireEvent.click(locationButton);
    expect(screen.getByText("Choose a location")).toBeInTheDocument();
  });
});
