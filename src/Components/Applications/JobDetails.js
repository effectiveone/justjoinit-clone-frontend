import { Chip, Grid, Typography } from "@material-ui/core";
export const JobDetails = ({ job }) => {
  return (
    <Grid container item xs={9} spacing={1} direction="column">
      <Grid item>
        <Typography variant="h5">{job?.title}</Typography>
      </Grid>
      <Grid item>Posted By: {job?.recruiter?.name}</Grid>
      <Grid item>Role : {job?.jobType}</Grid>
      <Grid item>Salary : &#8377; {job?.salary} per month</Grid>
      <Grid item>
        Duration : {job?.duration !== 0 ? `${job?.duration} month` : `Flexible`}
      </Grid>
      <Grid item>
        {job?.skillsets?.map((skill) => (
          <Chip label={skill} style={{ marginRight: "2px" }} />
        ))}
      </Grid>
    </Grid>
  );
};
