import React from "react";
import { shallow } from "enzyme";
import { Button } from "@material-ui/core";
import { useProfileContext } from "../../Context/useProfileContext";
import { JobInput } from "./JobInput";
import { MultifieldInput } from "./MultifieldInput";

jest.mock("../../Context/useProfileContext");

describe("MultifieldInput", () => {
  let wrapper;
  const setJobs = jest.fn();
  const jobs = [
    {
      institutionName: "",
      startYear: "",
      endYear: "",
    },
  ];

  beforeEach(() => {
    useProfileContext.mockReturnValue({ jobs, setJobs });
    wrapper = shallow(<MultifieldInput />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a JobInput component", () => {
    expect(wrapper.find(JobInput)).toHaveLength(1);
  });

  it("should call setJobs with a new institution object when add button is clicked", () => {
    const addButton = wrapper.find(Button);
    addButton.simulate("click");
    expect(setJobs).toHaveBeenCalledWith([
      ...jobs,
      {
        institutionName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  });
});
