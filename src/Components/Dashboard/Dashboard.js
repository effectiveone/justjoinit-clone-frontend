import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

import { FilterPopup } from "./FilterPopup";
// import { JobTitle } from "./JobTitle";
import { useDashboardContext } from "../../Context/useDashboardContext";
import LanguageGrid from "./LanguageGrid";
import CustomSelectButton from "./CustomSelectButton";
import CustomLanguageSelect from "./CustomLanguageSelect";
import { SearchField } from "./SearchField";
import { JobContainer } from "./JobContainer";
import JobMap from "./jobMap";

export const Dashboard = () => {
  const {
    getData,
    filterOpen,
    searchOptions,
    setFilterOpen,
    setSearchOptions,
  } = useDashboardContext();

  const handleLanguageClick = (languageName) => {
    setSearchOptions({
      ...searchOptions,
      query: languageName,
    });
    getData();
  };

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            display: "flex",
            flexWrap: !isFocused ? "nowrap" : "wrap",
            position: "relative",
            marginTop: isFocused && 44,
          }}
        >
          <Grid item style={{ position: "absolute", left: "10px", zIndex: 99 }}>
            <SearchField
              handleLanguageClick={handleLanguageClick}
              isFocused={isFocused}
              setIsFocused={setIsFocused}
            />
          </Grid>
          {!isFocused && (
            <>
              <Grid item>
                <CustomSelectButton
                  handleLanguageClick={handleLanguageClick}
                  style={{ flex: 1 }}
                  isFocused={isFocused}
                />
              </Grid>
              <Grid item style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <LanguageGrid
                  isFocused={isFocused}
                  handleLanguageClick={handleLanguageClick}
                  style={{ flex: 1 }}
                />
              </Grid>
              <Grid item style={{ paddingRight: "50px" }}>
                <CustomLanguageSelect
                  style={{ flex: 1 }}
                  handleLanguageClick={handleLanguageClick}
                />
              </Grid>
            </>
          )}
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FilterListIcon />}
              onClick={() => setFilterOpen(true)}
              style={{
                whiteSpace: "nowrap",
                borderRadius: 30,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 14,

                color: "rgb(119, 119, 119)",
                background: "rgb(255, 255, 255)",
                borderColor: "rgb(228, 232, 240)",
                marginLeft: 10,
                marginTop: "-20px",
                position: "absolute",
                right: "10px",
              }}
            >
              More filters
            </Button>
          </Grid>
        </Grid>
        <Grid style={{ display: "flex", flexDirection: "row" }}>
          <JobContainer />
          <JobMap />
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
