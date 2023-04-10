import { render, fireEvent } from "@testing-library/react";
import { MultifieldInput } from "./MultifieldInput";

describe("MultifieldInput", () => {
  const education = [
    {
      institutionName: "Harvard University",
      startYear: 2010,
      endYear: 2014,
    },
  ];

  it("should render the education fields", () => {
    const { getByLabelText } = render(
      <MultifieldInput education={education} setEducation={() => {}} />
    );

    expect(getByLabelText("Institution Name #1")).toHaveValue(
      education[0].institutionName
    );
    expect(getByLabelText("Start Year")).toHaveValue(education[0].startYear);
    expect(getByLabelText("End Year")).toHaveValue(education[0].endYear);
  });

  it("should update education fields when input values change", () => {
    const setEducation = jest.fn();
    const { getByLabelText } = render(
      <MultifieldInput education={education} setEducation={setEducation} />
    );

    const institutionNameInput = getByLabelText("Institution Name #1");
    fireEvent.change(institutionNameInput, {
      target: { value: "Massachusetts Institute of Technology" },
    });

    expect(setEducation).toHaveBeenCalledWith([
      {
        institutionName: "Massachusetts Institute of Technology",
        startYear: 2010,
        endYear: 2014,
      },
    ]);
  });

  it("should add a new education field when add button is clicked", () => {
    const setEducation = jest.fn();
    const { getByRole } = render(
      <MultifieldInput education={education} setEducation={setEducation} />
    );

    const addButton = getByRole("button", { name: "Add Another Institution" });
    fireEvent.click(addButton);

    expect(setEducation).toHaveBeenCalledWith([
      ...education,
      { institutionName: "", startYear: "", endYear: "" },
    ]);
  });
});
