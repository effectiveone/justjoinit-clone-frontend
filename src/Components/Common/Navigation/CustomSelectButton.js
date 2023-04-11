import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { makeStyles } from "@material-ui/core/styles";
import LocationModal from "./LocationModal";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 32,
    textTransform: "none",
    fontWeight: 600,
    fontSize: 14,
    color: "rgb(119, 119, 119)",
    background: "rgb(255, 255, 255)",
    borderColor: "rgb(228, 232, 240)",
    minWidth: 160,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 6,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1,
    background: "white",
    border: "1px solid gray",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    minWidth: "200px",
  },
  option: {
    padding: "5px",
    cursor: "pointer",
    "&:hover": {
      background: "#eee",
    },
  },
}));

function CustomSelectButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(options[0]);

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   onChange(option);
  //   setOpen(false);
  // };

  return (
    <div
      style={{
        position: "relative",
        transition: "all width 3s ease",
      }}
    >
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        onClick={() => setOpen(!open)}
      >
        Location
      </Button>
      <LocationModal open={open} handleClose={() => setOpen((prev) => !prev)} />
    </div>
  );
}

export default CustomSelectButton;
