import { Grid, Typography } from "@material-ui/core";

import { ApplicationTitle } from "./ApplicationsTitle";
import { useApllicationContext } from "../../Context/useApllicationContext";

export const Applications = () => {
  const { applications } = useApllicationContext();

  const renderApplications = () => {
    return applications.length > 0 ? (
      applications.map((obj) => (
        <Grid key={obj.id} item xs={12} sm={6} md={4} lg={3}>
          <ApplicationTitle application={obj} />
        </Grid>
      ))
    ) : (
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          No Applications Found
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h2">Applications</Typography>
      </Grid>
      <Grid container item spacing={2} justify="center">
        {renderApplications()}
      </Grid>
    </Grid>
  );
};
