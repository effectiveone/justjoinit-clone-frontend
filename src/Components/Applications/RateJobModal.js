import { Button, makeStyles, Paper, Modal } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(() => ({
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const RateJobModal = ({
  open,
  handleClose,
  handleRatingChange,
  handleRatingSubmit,
  rating,
}) => {
  const classes = useStyles();

  return (
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
          onChange={(event, newValue) => handleRatingChange(newValue)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ padding: "10px 50px" }}
          onClick={handleRatingSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Modal>
  );
};
