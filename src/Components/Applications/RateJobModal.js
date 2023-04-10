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

const RateJobModal = ({
  open,
  handleClose,
  handleRatingChange,
  handleRatingSubmit,
  rating: ratingProp,
}) => {
  const classes = useStyles();
  const rating = ratingProp === -1 ? null : ratingProp;

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
          value={rating}
          onChange={handleRatingChange}
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

export default RateJobModal;
