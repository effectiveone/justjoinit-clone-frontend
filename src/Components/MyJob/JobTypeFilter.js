import React from "react";
import { Grid, FormControlLabel, Checkbox } from "@material-ui/core";

const JobTypeFilter = ({ searchOptions, setSearchOptions }) => {
  const handleJobTypeChange = (event) => {
    setSearchOptions({
      ...searchOptions,
      jobType: {
        ...searchOptions.jobType,
        [event.target.name]: event.target.checked,
      },
    });
  };

  return (
    <Grid container item alignItems="center">
      <Grid item xs={3}>
        Job Type
      </Grid>
      <Grid container item xs={9} justifyContent="space-around">
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                name="fullTime"
                checked={searchOptions?.jobType?.fullTime}
                onChange={handleJobTypeChange}
              />
            }
            label="Full Time"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                name="partTime"
                checked={searchOptions?.jobType?.partTime}
                onChange={handleJobTypeChange}
              />
            }
            label="Part Time"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                name="wfh"
                checked={searchOptions?.jobType?.wfh}
                onChange={handleJobTypeChange}
              />
            }
            label="Work From Home"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobTypeFilter;
