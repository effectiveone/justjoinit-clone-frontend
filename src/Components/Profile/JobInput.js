import React from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import { useProfileContext } from "../../Context/useProfileContext";

const useStyles = makeStyles(() => ({
  inputBox: {
    width: "300px",
  },
}));

export const JobInput = () => {
  const classes = useStyles();
  const { jobs, setJobs } = useProfileContext();

  const handleJobTitleChange = (event, key) => {
    const newJobs = [...jobs];
    newJobs[key].jobTitle = event.target.value;
    setJobs(newJobs);
  };

  const handleSalaryChange = (event, key) => {
    const newJobs = [...jobs];
    newJobs[key].salary = event.target.value;
    setJobs(newJobs);
  };

  const handleDurationChange = (event, key) => {
    const newJobs = [...jobs];
    newJobs[key].duration = event.target.value;
    setJobs(newJobs);
  };

  return (
    <>
      {jobs.map((obj, key) => (
        <Grid item container className={classes.inputBox} key={key}>
          <Grid item xs={6}>
            <TextField
              label={`Job Title #${key + 1}`}
              value={jobs[key].jobTitle}
              onChange={(event) => handleJobTitleChange(event, key)}
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
              onChange={(event) => handleSalaryChange(event, key)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Duration"
              value={obj.duration}
              variant="outlined"
              type="number"
              onChange={(event) => handleDurationChange(event, key)}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
