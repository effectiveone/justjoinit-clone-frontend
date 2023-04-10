import React from "react";
import { render } from "@testing-library/react";
import PostLabel from "./PostLabel";

describe("PostLabel", () => {
  it("should not render 'new' label when posting date is older than 2 weeks", () => {
    const postingDate = new Date();
    postingDate.setDate(postingDate.getDate() - 15);
    const { queryByText } = render(
      <PostLabel dateOfPosting={postingDate.toISOString()} />
    );
    expect(queryByText("new")).toBeNull();
  });

  it("should render 'new' label when posting date is within the last 2 weeks", () => {
    const postingDate = new Date();
    postingDate.setDate(postingDate.getDate() - 7);
    const { getByText } = render(
      <PostLabel dateOfPosting={postingDate.toISOString()} />
    );
    expect(getByText("new")).toBeInTheDocument();
  });
});
