import { Button, Grid, makeStyles, Paper, Modal } from "@material-ui/core";

import { useMyJobContext } from "../../Context/useMyJobContext";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const FilterPopup = () => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } =
    useMyJobContext();
  return (
    <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
      <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          <JobTypeFilter
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
          />
          <SalaryFilter
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
          />
          <DurationFilter
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
          />
          <SortFilter
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
          />
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => getData()}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};
