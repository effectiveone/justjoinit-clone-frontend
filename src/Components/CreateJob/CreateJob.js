import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { FormInput } from "../Common/FormInput";
import { JobInputs } from "../../Utils/JobInputs";
import { Rating } from "@material-ui/lab";
import ChipInput from "material-ui-chip-input";

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
const CreateJob = () => {
  const classes = useStyles();

  const [jobDetails, setJobDetails] = useState({
    title: "",
    companySize: "",
    seniority: "",
    description: "",
    techStack: [],
    locations: [],
    logo: "",
    remote: false,
    deadline: "",
    jobType: "",
    duration: "",
    salary: "",
    activeApplications: "",
    acceptedCandidates: "",
  });

  const handleInput = (key, value) => {
    setJobDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Grid container justify="center" className={classes.body}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Create Job
        </Typography>
        <Paper>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="stretch" spacing={3}>
              {JobInputs.map((input) => (
                <Grid item key={input.key}>
                  <FormInput
                    label={input.label}
                    value={jobDetails[input.key]}
                    handleChange={(event) =>
                      handleInput(input.key, event.target.value)
                    }
                    type={input.type}
                    select={input.type === "select"}
                    options={input.options || []}
                  />
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12} style={{ paddingTop: "50px" }}>
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

            <Grid item xs={12} style={{ paddingTop: "50px" }}>
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

              <Button
                className={classes.submitButton}
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "50px 0 50px 0" }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default CreateJob;
