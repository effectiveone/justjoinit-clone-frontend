import React from "react";
import { Grid, Typography, Checkbox, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const SortFilter = ({ searchOptions, setSearchOptions }) => {
  return (
    <Grid container item alignItems="center">
      <Grid item xs={3}>
        Sort
      </Grid>
      <Grid item container direction="row" xs={9}>
        <Grid
          item
          container
          xs={4}
          justifyContent="space-around"
          alignItems="center"
          style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
        >
          <Grid item>
            <Checkbox
              name="salary"
              checked={searchOptions?.sort?.salary?.status}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    salary: {
                      ...searchOptions.sort.salary,
                      status: event.target.checked,
                    },
                  },
                })
              }
              id="salary"
            />
          </Grid>
          <Grid item>
            <label for="salary">
              <Typography>Salary</Typography>
            </label>
          </Grid>
          <Grid item>
            <IconButton
              disabled={!searchOptions?.sort?.salary?.status}
              onClick={() => {
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    salary: {
                      ...searchOptions.sort.salary,
                      desc: !searchOptions.sort.salary.desc,
                    },
                  },
                });
              }}
            >
              {searchOptions?.sort?.salary?.desc ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={4}
          justifyContent="space-around"
          alignItems="center"
          style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
        >
          <Grid item>
            <Checkbox
              name="duration"
              checked={searchOptions?.sort?.duration?.status}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    duration: {
                      ...searchOptions.sort.duration,
                      status: event.target.checked,
                    },
                  },
                })
              }
              id="duration"
            />
          </Grid>
          <Grid item>
            <label for="duration">
              <Typography>Duration</Typography>
            </label>
          </Grid>
          <Grid item>
            <IconButton
              disabled={!searchOptions?.sort?.duration?.status}
              onClick={() => {
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    duration: {
                      ...searchOptions.sort.duration,
                      desc: !searchOptions.sort.duration.desc,
                    },
                  },
                });
              }}
            >
              {searchOptions?.sort?.duration?.desc ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={4}
          justifyContent="space-around"
          alignItems="center"
          style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
        >
          <Grid item>
            <Checkbox
              name="rating"
              checked={searchOptions?.sort?.rating?.status}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    rating: {
                      ...searchOptions.sort.rating,
                      status: event.target.checked,
                    },
                  },
                })
              }
              id="rating"
            />
          </Grid>
          <Grid item>
            <label for="rating">
              <Typography>Rating</Typography>
            </label>
          </Grid>
          <Grid item>
            <IconButton
              disabled={!searchOptions?.sort?.rating?.status}
              onClick={() => {
                setSearchOptions({
                  ...searchOptions,
                  sort: {
                    ...searchOptions.sort,
                    rating: {
                      ...searchOptions.sort.rating,
                      desc: !searchOptions.sort.rating.desc,
                    },
                  },
                });
              }}
            >
              {searchOptions?.sort?.rating?.desc ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
