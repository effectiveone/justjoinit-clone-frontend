import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { FilterPopup } from "./FilterPopup";
import { useApplicantContext } from "../../Context/useApplicantContext";
import { ApplicationTitle } from "./ApplicationTitle";

export const Applicants = () => {
  const {
    applications,
    filterOpen,
    setFilterOpen,
    searchOptions,
    setSearchOptions,
    getData,
  } = useApplicantContext();

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid item>
          <Typography variant="h2">Employees</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setFilterOpen(true)}>
            <FilterListIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          item
          xs
          direction="column"
          style={{ width: "100%" }}
          alignItems="stretch"
          justifyContent="center"
        >
          {applications?.length > 0 ? (
            applications?.map((obj) => (
              <Grid item key={obj.id}>
                <ApplicationTitle application={obj} getData={getData} />
              </Grid>
            ))
          ) : (
            <Typography variant="h5" style={{ textAlign: "center" }}>
              No Applications Found
            </Typography>
          )}
        </Grid>
      </Grid>
      <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        getData={() => {
          getData();
          setFilterOpen(false);
        }}
      />
    </>
  );
};
