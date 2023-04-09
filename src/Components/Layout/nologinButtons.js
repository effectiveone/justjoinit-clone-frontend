import React from "react";
import { Button } from "@material-ui/core";
import RegisterButton from "./RegisterButton";

const NoLoginButtons = ({ handleClick }) => {
  return (
    <>
      <Button color="inherit" onClick={() => handleClick("/login")}>
        Login
      </Button>
      <RegisterButton handleClick={handleClick} />
    </>
  );
};

export default NoLoginButtons;
