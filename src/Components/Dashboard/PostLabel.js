import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  chip: {
    color: "rgb(153, 161, 171)",
    height: "16px",
    padding: "0px 5px",
    fontSize: "8px",
    lineHeight: "13px",
    marginLeft: "10px",
    whiteSpace: "nowrap",
    borderColor: "rgb(228, 232, 240)",
    borderWidth: "1px",
    borderRadius: "11px",
    backgroundColor: "rgb(228, 232, 240)",
  },
}));

function PostLabel(props) {
  const classes = useStyles();
  // konwersja daty publikacji na obiekt Date
  const postDate = new Date(props.dateOfPosting);

  // obliczenie różnicy między datami w dniach
  const currentDate = new Date();
  const daysDifference = (currentDate - postDate) / (1000 * 3600 * 24);

  // zwrócenie JSX z etykietą "new", jeśli data publikacji mieści się w ciągu ostatnich dwóch tygodni
  if (daysDifference <= 14) {
    return (
      <Chip
        label="new"
        size="small"
        className={classes.chip}
        style={{ backgroundColor: "e4e8f0", color: "ccd2db" }}
      />
    );
  } else {
    return null;
  }
}

export default PostLabel;
