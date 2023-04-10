import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import isAuth, { userType } from "../../../Utils/isAuth";
import ApplicantButtons from "./ApplicantButtons";
import NoLoginButtons from "./NologinButtons";
import RecruterButtons from "./RecruterButtons";

// Use the mocked versions of the components and functions for testing
jest.mock("../../../Utils/isAuth");
jest.mock("./ApplicantButtons");
jest.mock("./nologinButtons");
jest.mock("./RecruterButtons");

describe("Navbar", () => {
  it("renders the Navbar component", () => {
    const { getByRole } = render(<Navbar />);
    const navbar = getByRole("banner");
    expect(navbar).toBeInTheDocument();
  });

  it("renders ApplicantButtons when the user is authenticated as an applicant", () => {
    isAuth.mockImplementation(() => true);
    userType.mockImplementation(() => "applicant");

    const { getByTestId } = render(<ApplicantButtons />);
    const applicantButtons = getByTestId("mock-applicant-buttons");
    expect(applicantButtons).toBeInTheDocument();
  });

  it("renders RecruterButtons when the user is authenticated as a recruiter", () => {
    isAuth.mockImplementation(() => true);
    userType.mockImplementation(() => "recruiter");

    const { getByTestId } = render(<RecruterButtons />);
    const recruiterButtons = getByTestId("mock-recruiter-buttons");
    expect(recruiterButtons).toBeInTheDocument();
  });

  it("renders NoLoginButtons when the user is not authenticated", () => {
    isAuth.mockImplementation(() => false);

    const { getByTestId } = render(<NoLoginButtons />);
    const noLoginButtons = getByTestId("mock-nologin-buttons");
    expect(noLoginButtons).toBeInTheDocument();
  });
});
