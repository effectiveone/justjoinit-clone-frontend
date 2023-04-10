import React from "react";
import {
  Button,
  makeStyles,
  Paper,
  Modal,
  Typography,
  Grid,
} from "@material-ui/core";
import { useApplicantContext } from "../../Context/useApplicantContext";

const useStyles = makeStyles(() => ({
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const DecisionModal = () => {
  const classes = useStyles();
  const { openEndJob, handleCloseEndJob, updateStatus } = useApplicantContext();

  const handleUpdateStatus = () => {
    updateStatus("finished");
  };

  return (
    <Modal
      open={openEndJob}
      onClose={handleCloseEndJob}
      className={classes.popupDialog}
    >
      <Paper
        style={{
          padding: "20px",
          outline: "none",
          minWidth: "30%",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "10px" }}>
          Are you sure?
        </Typography>
        <Grid container justify="center" spacing={5}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              style={{ padding: "10px 50px" }}
              onClick={handleUpdateStatus}
            >
              Yes
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={handleCloseEndJob}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default DecisionModal;
