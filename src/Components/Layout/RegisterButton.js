import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";

function RegisterButton({ handleClick }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleMenuOpen}>Register</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        style={{ marginTop: "50px" }}
      >
        <MenuItem onClick={() => handleClick("/applicantsignup")}>
          As Applicant
        </MenuItem>
        <MenuItem onClick={() => handleClick("/recruitersignup")}>
          As Recruiter
        </MenuItem>
      </Menu>
    </>
  );
}

export default RegisterButton;
