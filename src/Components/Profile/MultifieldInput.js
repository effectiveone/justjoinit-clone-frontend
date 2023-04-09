import { Button, Grid, makeStyles } from "@material-ui/core";
import { useProfileContext } from "../../Context/useProfileContext";
import { JobInput } from "./JobInput";

const useStyles = makeStyles(() => ({
  inputBox: {
    width: "300px",
  },
}));

export const MultifieldInput = () => {
  const classes = useStyles();
  const { jobs, setJobs } = useProfileContext();

  return (
    <>
      <JobInput />
      <Grid item style={{ alignSelf: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            setJobs([
              ...jobs,
              {
                institutionName: "",
                startYear: "",
                endYear: "",
              },
            ])
          }
          className={classes.inputBox}
        >
          Add another institution details
        </Button>
      </Grid>
    </>
  );
};
