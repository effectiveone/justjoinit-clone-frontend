import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
      <Button
        style={{
          backgroundColor: "#ec4d80",
          color: "white",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "row",
        }}
        onClick={handleMenuOpen}
      >
        Sing in
        <KeyboardArrowDownIcon />
      </Button>
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
