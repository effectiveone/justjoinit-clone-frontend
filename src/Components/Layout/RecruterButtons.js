import React from "react";
import { Button } from "@material-ui/core";

const RecruterButtons = ({ handleClick }) => {
  return (
    <>
      <div data-testid="mock-recruiter-buttons">
        <Button color="inherit" onClick={() => handleClick("/home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleClick("/addjob")}>
          Add Jobs
        </Button>
        <Button color="inherit" onClick={() => handleClick("/myjobs")}>
          My Jobs
        </Button>
        <Button color="inherit" onClick={() => handleClick("/employees")}>
          Employees
        </Button>
        <Button color="inherit" onClick={() => handleClick("/profile")}>
          Profile
        </Button>
        <Button color="inherit" onClick={() => handleClick("/logout")}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default RecruterButtons;
