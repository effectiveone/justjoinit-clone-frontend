import React from "react";
import { Grid, Typography } from "@material-ui/core";
import JobListing from "./JobListing";
import { useDashboardContext } from "../../Context/useDashboardContext";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles(() => ({
  jobsContainer: {
    display: "flex",
    flexDirection: "row",
    height: "500px",
    justifyContent: "center",
    width: "850px",
    overflowY: "scroll",
    backgroundColor: "#f2f5f7",
  },
}));

export const JobContainer = () => {
  const { jobs } = useDashboardContext();
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.jobsContainer}>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <React.Fragment key={uuidv4()}>
            <JobListing job={job} />
          </React.Fragment>
        ))
      ) : (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          No jobs found
        </Typography>
      )}
    </Grid>
  );
};
