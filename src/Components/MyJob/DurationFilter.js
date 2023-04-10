import React from "react";
import { Grid, TextField, MenuItem } from "@material-ui/core";

export const DurationFilter = ({ searchOptions, setSearchOptions }) => {
  return (
    <Grid container item alignItems="center">
      <Grid item xs={3}>
        Duration
      </Grid>
      <Grid item xs={9}>
        <TextField
          select
          label="Duration"
          variant="outlined"
          fullWidth
          value={searchOptions?.duration}
          onChange={(event) =>
            setSearchOptions({
              ...searchOptions,
              duration: event.target.value,
            })
          }
        >
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};
