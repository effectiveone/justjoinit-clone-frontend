import React from "react";
import { Button, makeStyles, Paper, Modal } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { useApplicantContext } from "../../Context/useApplicantContext";
const useStyles = makeStyles(() => ({
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function RatingModal() {
  const { open, rating, setRating, changeRating, handleClose } =
    useApplicantContext();
  const classes = useStyles();

  return (
    <>
      <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "30%",
            alignItems: "center",
          }}
        >
          <Rating
            name="simple-controlled"
            style={{ marginBottom: "30px" }}
            value={rating === -1 ? null : rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px" }}
            onClick={() => changeRating()}
          >
            Submit
          </Button>
        </Paper>
      </Modal>
    </>
  );
}
