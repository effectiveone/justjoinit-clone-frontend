import React from "react";
import Chip from "@material-ui/core/Chip";

function PostLabel(props) {
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
        style={{ backgroundColor: "e4e8f0", color: "ccd2db" }}
      />
    );
  } else {
    return null;
  }
}

export default PostLabel;
