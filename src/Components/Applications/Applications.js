import { Grid, Typography } from "@material-ui/core";

import { ApplicationTitle } from "./ApplicationsTitle";
import { useApllicationContext } from "../../Context/useApllicationContext";

export const Applications = () => {
  const { applications } = useApllicationContext();
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Applications</Typography>
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
        {applications.length > 0 ? (
          applications.map((obj) => (
            <Grid item>
              <ApplicationTitle application={obj} />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No Applications Found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
