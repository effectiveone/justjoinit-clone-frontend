import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { makeStyles } from "@material-ui/core/styles";
import { DeveloperIcon, RecruiterIcon } from "../../Utils/devIcons";

const useStyles = makeStyles(() => ({
  menuItem: {
    display: "flex",
    alignItems: "center",
    height: "80px",
    width: "265px",
    flexDirection: "row",
    gap: "50px",
    border: "0.5px solid",
    "&: hover": {
      backgroundColor: "#f3f6f8",
    },
  },
}));

function RegisterButton({ handleClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

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
          gap: "10px",
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
        style={{ marginTop: "50px", height: "285px", width: "385px" }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => handleClick("/applicantsignup")}
        >
          <DeveloperIcon
            style={{ backgroundColor: "#fdf8fb", color: "#ed629e" }}
          />
          <span> As Applicant</span>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => handleClick("/recruitersignup")}
        >
          <RecruiterIcon
            style={{ backgroundColor: "#f3e5f5", color: "#ab47bc" }}
          />
          <span> As Recruiter</span>
        </MenuItem>
      </Menu>
    </>
  );
}

export default RegisterButton;
