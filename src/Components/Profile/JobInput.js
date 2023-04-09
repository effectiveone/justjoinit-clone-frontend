import React from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import { useProfileContext } from "../../Context/useProfileContext";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
  inputBox: {
    width: "300px",
  },
}));

export const JobInput = () => {
  const classes = useStyles();
  const { jobs, setJobs } = useProfileContext();

  return (
    <>
      {jobs.map((obj, key) => (
        <Grid item container className={classes.inputBox} key={key}>
          <Grid item xs={6}>
            <TextField
              label={`Job Title #${key + 1}`}
              value={jobs[key].jobTitle}
              onChange={(event) => {
                const newJobs = [...jobs];
                newJobs[key].jobTitle = event.target.value;
                setJobs(newJobs);
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Salary"
              value={obj.salary}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newJobs = [...jobs];
                newJobs[key].salary = event.target.value;
                setJobs(newJobs);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Duration"
              value={obj.duration}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newJobs = [...jobs];
                newJobs[key].duration = event.target.value;
                setJobs(newJobs);
              }}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
