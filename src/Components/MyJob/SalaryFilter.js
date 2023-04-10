import React from "react";
import { Grid, Slider } from "@material-ui/core";

export const SalaryFilter = ({ searchOptions, setSearchOptions }) => {
  return (
    <Grid container item alignItems="center">
      <Grid item xs={3}>
        Salary
      </Grid>
      <Grid item xs={9}>
        <Slider
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => {
            return value * (100000 / 100);
          }}
          marks={[
            { value: 0, label: "0" },
            { value: 100, label: "100000" },
          ]}
          value={searchOptions?.salary}
          onChange={(event, value) =>
            setSearchOptions({
              ...searchOptions,
              salary: value,
            })
          }
        />
      </Grid>
    </Grid>
  );
};
