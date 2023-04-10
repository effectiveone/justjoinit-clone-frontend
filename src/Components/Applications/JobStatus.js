import { Grid, makeStyles, Paper } from "@material-ui/core";
import { colorSet } from "../../Utils/jobConfig";

const useStyles = makeStyles(() => ({
  statusBlock: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    color: "#ffffff",
  },
}));

export const JobStatus = ({ status }) => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Paper
        className={classes.statusBlock}
        style={{ background: colorSet[status] }}
      >
        {status}
      </Paper>
    </Grid>
  );
};
