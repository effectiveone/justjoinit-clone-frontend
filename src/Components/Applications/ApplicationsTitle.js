import { useState } from "react";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { RateJobModal } from "./RateJobModal";
import { JobDetails } from "./JobDetails";
import { JobStatus } from "./JobStatus";
import axios from "axios";
import apiList from "../../Utils/apiList";
import { usePopupContext } from "../../Context/usePopupContext";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  statusBlock: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const ApplicationTitle = () => {
  const classes = useStyles();
  // const { application } = props;
  const { setPopup } = usePopupContext();
  // eslint-disable-next-line
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  const [rating, setRating] = useState(application.job.rating);

  const fetchRating = () => {
    axios
      .get(`${apiList.rating}?id=${application.job._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setRating(response.data.rating);
        console.log(response.data);
      })
      .catch((err) => {
        // console.log(err.response);
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  return (
    <Paper className={classes.jobTileOuter} elevation={3}>
      <Grid container>
        <JobDetails />
        <Grid item container direction="column" xs={3}>
          <JobStatus />
          {application.status === "accepted" ||
          application.status === "finished" ? (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.statusBlock}
                onClick={() => {
                  fetchRating();
                  setOpen(true);
                }}
              >
                Rate Job
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <RateJobModal />
    </Paper>
  );
};
