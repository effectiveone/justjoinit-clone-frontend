import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FiltAndSortPanel from "./FiltAndSortPanel";

describe("FiltAndSortPanel", () => {
  it("should render properly", () => {
    const onSortChange = jest.fn();
    const onRemoteChange = jest.fn();
    const { getByText } = render(
      <FiltAndSortPanel
        onSortChange={onSortChange}
        onRemoteChange={onRemoteChange}
      />
    );
    expect(getByText("Offers with Salary")).toBeInTheDocument();
    expect(getByText("All Offers")).toBeInTheDocument();
    expect(getByText("Remote")).toBeInTheDocument();
    expect(getByText("Latest")).toBeInTheDocument();
    expect(getByText("Highest Salary")).toBeInTheDocument();
    expect(getByText("Lowest Salary")).toBeInTheDocument();
  });

  it("should call onSortChange when the sorting option is changed", () => {
    const onSortChange = jest.fn();
    const onRemoteChange = jest.fn();
    render(
      <FiltAndSortPanel
        onSortChange={onSortChange}
        onRemoteChange={onRemoteChange}
      />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "highest" },
    });
    expect(onSortChange).toHaveBeenCalledWith("highest");
  });

  it("should call onRemoteChange when the remote checkbox is clicked", () => {
    const onSortChange = jest.fn();
    const onRemoteChange = jest.fn();
    render(
      <FiltAndSortPanel
        onSortChange={onSortChange}
        onRemoteChange={onRemoteChange}
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onRemoteChange).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onRemoteChange).toHaveBeenCalledWith(false);
  });
});
