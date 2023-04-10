import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DurationFilter } from "./DurationFilter";

const setup = (searchOptions = {}, setSearchOptions = jest.fn()) => {
  const utils = render(
    <DurationFilter
      searchOptions={searchOptions}
      setSearchOptions={setSearchOptions}
    />
  );
  const durationSelect = utils.getByLabelText("Duration");
  return {
    durationSelect,
    setSearchOptions,
    ...utils,
  };
};

describe("DurationFilter", () => {
  test("renders duration select", () => {
    const { durationSelect } = setup();
    expect(durationSelect).toBeInTheDocument();
  });

  test("displays correct initial value", () => {
    const searchOptions = { duration: "3" };
    const { durationSelect } = setup(searchOptions);
    expect(durationSelect.value).toBe(searchOptions.duration);
  });

  test("calls setSearchOptions with correct value on change", () => {
    const setSearchOptions = jest.fn();
    const { durationSelect } = setup({}, setSearchOptions);
    fireEvent.change(durationSelect, { target: { value: "4" } });

    expect(setSearchOptions).toHaveBeenCalledTimes(1);
    expect(setSearchOptions).toHaveBeenCalledWith({ duration: "4" });
  });
});
