import React from "react";
import { Button } from "@material-ui/core";

export const ApplicantButtons = ({ handleClick }) => {
  return (
    <>
      <Button color="inherit" onClick={() => handleClick("/home")}>
        Home
      </Button>
      <Button color="inherit" onClick={() => handleClick("/applications")}>
        Applications
      </Button>
      <Button color="inherit" onClick={() => handleClick("/profile")}>
        Profile
      </Button>
      <Button color="inherit" onClick={() => handleClick("/logout")}>
        Logout
      </Button>
    </>
  );
};
