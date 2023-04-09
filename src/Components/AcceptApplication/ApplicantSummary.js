import React from "react";
import {
  Button,
  Chip,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import { server } from "../../Utils/apiList";
import Rating from "@material-ui/lab/Rating";
import { useApplicantContext } from "../../Context/useApplicantContext";

const useStyles = makeStyles((theme) => ({
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

  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));
const ApplicantSummary = () => {
  const classes = useStyles();
  const { applications, setOpen, setOpenEndJob, appliedOn, getResume } =
    useApplicantContext();
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={`${server}${applications?.jobApplicant?.profile}`}
          className={classes.avatar}
        />
      </Grid>
      <Grid container item xs={7} spacing={1} direction="column">
        <Grid item>
          <Typography variant="h5">
            {applications?.jobApplicant?.name}
          </Typography>
        </Grid>
        <Grid item>
          <Rating
            value={
              applications?.jobApplicant?.rating !== -1
                ? applications?.jobApplicant?.rating
                : null
            }
            readOnly
          />
        </Grid>
        <Grid item>Job Title: {applications?.job?.title}</Grid>
        <Grid item>Role: {applications?.job?.jobType}</Grid>
        <Grid item>Applied On: {appliedOn?.toLocaleDateString()}</Grid>
        <Grid item>
          SOP: {applications?.sop !== "" ? applications?.sop : "Not Submitted"}
        </Grid>
        <Grid item>
          {applications?.jobApplicant?.skills?.map((skill) => (
            <Chip label={skill} style={{ marginRight: "2px" }} />
          ))}
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={3}>
        <Grid item>
          <Button
            variant="contained"
            className={classes.statusBlock}
            color="primary"
            onClick={() => getResume()}
          >
            Download Resume
          </Button>
        </Grid>
        <Grid item container xs>
          <Button
            variant="contained"
            color="primary"
            className={classes.statusBlock}
            style={{
              background: "#09BC8A",
            }}
            onClick={() => {
              setOpenEndJob(true);
            }}
          >
            End Job
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.statusBlock}
            onClick={() => {
              setOpen(true);
            }}
          >
            Rate Applicant
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ApplicantSummary;
