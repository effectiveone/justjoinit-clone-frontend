import {
  Button,
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { useCreateJob } from "../../Hooks/useCreateJob";
import { jobDurations, jobTypes } from "../../Utils/jobConfig";
import Rating from "@material-ui/lab/Rating/Rating";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const CreateJobs = () => {
  const classes = useStyles();
  const { setJobDetails, jobDetails, handleInput, handleUpdate } =
    useCreateJob();

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh", width: "" }}
      >
        <Grid item>
          <Typography variant="h2">Add Job</Typography>
        </Grid>
        <Grid item container xs direction="column" justify="center">
          <Grid item>
            <Paper
              style={{
                padding: "20px",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    label="Title"
                    value={jobDetails.title}
                    onChange={(event) =>
                      handleInput("title", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Remote"
                    variant="outlined"
                    value={jobDetails.remote}
                    onChange={(event) => {
                      handleInput("remote", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <ChipInput
                    className={classes.inputBox}
                    label="Locations"
                    variant="outlined"
                    helperText="Press enter to add locations"
                    value={jobDetails.locations}
                    onAdd={(chip) =>
                      setJobDetails({
                        ...jobDetails,
                        locations: [...jobDetails.locations, chip],
                      })
                    }
                    onDelete={(chip, index) => {
                      let locations = jobDetails.locations;
                      locations.splice(index, 1);
                      setJobDetails({
                        ...jobDetails,
                        locations: locations,
                      });
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Description"
                    value={jobDetails.description}
                    onChange={(event) =>
                      handleInput("description", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Tech Stack</Typography>
                  {jobDetails.techStack.map((tech, index) => (
                    <Grid
                      container
                      key={index}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={5}>
                        <TextField
                          label="Name"
                          variant="outlined"
                          value={tech.name}
                          onChange={(event) => {
                            let newTechStack = [...jobDetails.techStack];
                            newTechStack[index].name = event.target.value;
                            setJobDetails({
                              ...jobDetails,
                              techStack: newTechStack,
                            });
                          }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <Typography component="legend">Rating</Typography>
                        <Rating
                          name={`rating-${index}`}
                          value={tech.value}
                          onChange={(event, newValue) => {
                            let newTechStack = [...jobDetails.techStack];
                            newTechStack[index].value = newValue;
                            setJobDetails({
                              ...jobDetails,
                              techStack: newTechStack,
                            });
                          }}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            let newTechStack = [...jobDetails.techStack];
                            newTechStack.splice(index, 1);
                            setJobDetails({
                              ...jobDetails,
                              techStack: newTechStack,
                            });
                          }}
                        >
                          Usuń
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setJobDetails({
                        ...jobDetails,
                        techStack: [
                          ...jobDetails.techStack,
                          { name: "", value: 0 },
                        ],
                      });
                    }}
                  >
                    Add Tech Stack
                  </Button>
                </Grid>

                <Grid item>
                  <TextField
                    label="Company Size"
                    type="number"
                    variant="outlined"
                    value={jobDetails.companySize}
                    onChange={(event) => {
                      handleInput("companySize", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Seniority"
                    variant="outlined"
                    value={jobDetails.seniority}
                    onChange={(event) => {
                      handleInput("seniority", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value="Entry">Entry</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Senior">Senior</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Logo"
                    type="file"
                    variant="outlined"
                    onChange={(event) => {
                      handleInput("logo", event.target.files[0]);
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Application Deadline"
                    type="datetime-local"
                    value={jobDetails.deadline}
                    onChange={(event) => {
                      handleInput("deadline", event.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Job Type"
                    variant="outlined"
                    value={jobDetails.jobType}
                    onChange={(event) => {
                      handleInput("jobType", event.target.value);
                    }}
                    fullWidth
                  >
                    {jobTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Duration"
                    variant="outlined"
                    value={jobDetails.duration}
                    onChange={(event) => {
                      handleInput("duration", event.target.value);
                    }}
                    fullWidth
                  >
                    {jobDurations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Salary"
                    type="number"
                    variant="outlined"
                    value={jobDetails.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Active Applications"
                    type="number"
                    variant="outlined"
                    value={jobDetails.activeApplications}
                    onChange={(event) => {
                      handleInput("activeApplications", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Accepted Candidates"
                    type="number"
                    variant="outlined"
                    value={jobDetails.acceptedCandidates}
                    onChange={(event) => {
                      handleInput("acceptedCandidates", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Remote"
                    variant="outlined"
                    value={jobDetails.remote}
                    onChange={(event) => {
                      handleInput("remote", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", marginTop: "30px" }}
                onClick={() => handleUpdate()}
              >
                Create Job
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
