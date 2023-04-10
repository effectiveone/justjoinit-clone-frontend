import { render, fireEvent } from "@testing-library/react";
import { useProfileContext } from "../../Context/useProfileContext";
import { Profile } from "./Profile";

jest.mock("../../Context/useProfileContext");

describe("Profile", () => {
  beforeEach(() => {
    useProfileContext.mockReturnValue({
      jobProfile: {
        profileDetails: {
          name: "John Doe",
          skills: ["React", "Node.js"],
        },
      },
      handleInput: jest.fn(),
      handleUpdate: jest.fn(),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders the Profile component", () => {
    const { getByText } = render(<Profile />);
    expect(getByText("Profile")).toBeInTheDocument();
  });

  test("updates the name input correctly", () => {
    const { getByLabelText } = render(<Profile />);
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    expect(useProfileContext().handleInput).toHaveBeenCalledWith(
      "name",
      "Jane Doe",
      useProfileContext().jobProfile
    );
  });

  test("adds a skill correctly", () => {
    const { getByLabelText } = render(<Profile />);
    const skillsInput = getByLabelText("Skills");
    fireEvent.keyDown(skillsInput, {
      key: "Enter",
      target: { value: "JavaScript" },
    });
    expect(useProfileContext().handleInput).toHaveBeenCalledWith(
      "profileDetails",
      {
        name: "John Doe",
        skills: ["React", "Node.js", "JavaScript"],
      },
      useProfileContext().jobProfile
    );
  });

  test("deletes a skill correctly", () => {
    const { getByLabelText, getAllByRole } = render(<Profile />);
    const skillsInput = getByLabelText("Skills");
    fireEvent.keyDown(skillsInput, {
      key: "Delete",
      target: getAllByRole("button")[0],
    });
    expect(useProfileContext().handleInput).toHaveBeenCalledWith(
      "profileDetails",
      {
        name: "John Doe",
        skills: ["Node.js"],
      },
      useProfileContext().jobProfile
    );
  });

  test("handles the 'Update Details' button click correctly", () => {
    const { getByText } = render(<Profile />);
    const updateButton = getByText("Update Details");
    fireEvent.click(updateButton);
    expect(useProfileContext().handleUpdate).toHaveBeenCalled();
  });
});
