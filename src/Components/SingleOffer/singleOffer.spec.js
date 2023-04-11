import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SingleOffer from "./SingleOffer";
import { DashboardContextProvider } from "../../Context/useDashboardContext";

describe("SingleOffer Component", () => {
  const renderWithContext = (component) => {
    return render(
      <DashboardContextProvider>{component}</DashboardContextProvider>
    );
  };

  test("renders SingleOffer component", () => {
    renderWithContext(<SingleOffer />);
    expect(screen.getByText(/Tech Stack/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Apply/i)).toBeInTheDocument();
  });

  test("renders the back button and triggers the onClick event", () => {
    const handleClick = jest.fn();
    renderWithContext(<SingleOffer />);
    const backButton = screen.getByRole("button", { name: /back/i });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(handleClick).toHaveBeenCalled();
  });
});
