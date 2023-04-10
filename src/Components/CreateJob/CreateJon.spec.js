import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { JobInputs } from "../../Utils/JobInputs";
import CreateJob from "./CreateJob";

describe("CreateJob", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateJob />);
  });

  it("renders a form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("renders a submit button", () => {
    expect(wrapper.find("button[type='submit']")).toHaveLength(1);
  });

  it("renders a form input for each job input", () => {
    expect(wrapper.find("FormInput")).toHaveLength(JobInputs.length);
  });

  it("handles input changes correctly", () => {
    const inputKey = JobInputs[0].key;
    const inputValue = "test title";
    const input = wrapper.find(`FormInput[key="${inputKey}"]`);
    input.prop("handleChange")({ target: { value: inputValue } });
    expect(wrapper.state("jobDetails")[inputKey]).toEqual(inputValue);
  });

  it("adds a location to the list", () => {
    const location = "test location";
    const input = wrapper.find("ChipInput");
    input.prop("onAdd")(location);
    expect(wrapper.state("jobDetails").locations).toContain(location);
  });

  it("deletes a location from the list", () => {
    const location = "test location";
    wrapper.setState({
      jobDetails: {
        ...wrapper.state("jobDetails"),
        locations: [location],
      },
    });
    const input = wrapper.find("ChipInput");
    input.prop("onDelete")(location, 0);
    expect(wrapper.state("jobDetails").locations).not.toContain(location);
  });

  it("adds a tech stack to the list", () => {
    const input = wrapper.find(".add-tech-stack");
    input.simulate("click");
    expect(wrapper.state("jobDetails").techStack).toContainEqual({
      name: "",
      value: 0,
    });
  });

  it("deletes a tech stack from the list", () => {
    wrapper.setState({
      jobDetails: {
        ...wrapper.state("jobDetails"),
        techStack: [{ name: "test tech", value: 3 }],
      },
    });
    const input = wrapper.find(".delete-tech-stack");
    input.simulate("click");
    expect(wrapper.state("jobDetails").techStack).toHaveLength(0);
  });

  it("updates a tech stack name", () => {
    const name = "test tech";
    const input = wrapper.find("TextField").first();
    input.prop("onChange")({ target: { value: name } });
    expect(wrapper.state("jobDetails").techStack[0].name).toEqual(name);
  });

  it("updates a tech stack rating", () => {
    const rating = 3;
    const input = wrapper.find("Rating").first();
    input.prop("onChange")(null, rating);
    expect(wrapper.state("jobDetails").techStack[0].value).toEqual(rating);
  });

  it("submits the form", () => {
    const mockSubmit = jest.fn();
    wrapper = shallow(<CreateJob onSubmit={mockSubmit} />);
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(mockSubmit).toHaveBeenCalled();
  });
});
