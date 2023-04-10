import { render, screen, fireEvent } from "@testing-library/react";
import LocationModal from "./LocationModal";

describe("LocationModal", () => {
  const handleClose = jest.fn();
  const handleLanguageClick = jest.fn();
  const worldLocations = [
    "New York",
    "Seattle",
    "Berlin",
    "San Francisco",
    "London",
  ];
  const locations = [
    "Warszawa",
    "Krakow",
    "Wroclaw",
    "Poznan",
    "Trojmiasto",
    "Slask",
  ];

  beforeEach(() => {
    handleClose.mockClear();
    handleLanguageClick.mockClear();
  });

  test("renders LocationModal component", () => {
    render(
      <LocationModal
        open={true}
        handleClose={handleClose}
        handleLanguageClick={handleLanguageClick}
      />
    );

    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Top Poland")).toBeInTheDocument();

    for (let i = 0; i < locations.length; i++) {
      expect(screen.getByText(locations[i])).toBeInTheDocument();
    }

    expect(screen.getByText("Top World")).toBeInTheDocument();

    for (let i = 0; i < worldLocations.length; i++) {
      expect(screen.getByText(worldLocations[i])).toBeInTheDocument();
    }
  });

  test("handles click on Close button", () => {
    render(
      <LocationModal
        open={true}
        handleClose={handleClose}
        handleLanguageClick={handleLanguageClick}
      />
    );

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("handles click on location button", () => {
    render(
      <LocationModal
        open={true}
        handleClose={handleClose}
        handleLanguageClick={handleLanguageClick}
      />
    );

    const locationButton = screen.getByText(worldLocations[0]);
    fireEvent.click(locationButton);

    expect(handleLanguageClick).toHaveBeenCalledTimes(1);
    expect(handleLanguageClick).toHaveBeenCalledWith(worldLocations[0]);
  });
});
