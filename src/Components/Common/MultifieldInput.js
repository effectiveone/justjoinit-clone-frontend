import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useCallback } from "react";
import "react-phone-input-2/lib/material.css";

const useStyles = makeStyles(() => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "400px",
  },
  submitButton: {
    width: "400px",
  },
}));

export const MultifieldInput = ({ education, setEducation }) => {
  const classes = useStyles();

  const handleEducationChange = useCallback(
    (event, key, field) => {
      const newEducation = [...education];
      newEducation[key] = {
        ...newEducation[key],
        [field]: event.target.value,
      };
      setEducation(newEducation);
    },
    [education, setEducation]
  );

  const handleAddEducation = useCallback(() => {
    setEducation([
      ...education,
      {
        institutionName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  }, [education, setEducation]);

  return (
    <>
      {education.map((edu, key) => (
        <Grid
          item
          container
          className={classes.inputBox}
          key={key}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Grid item xs={6}>
            <TextField
              label={`Institution Name #${key + 1}`}
              value={edu?.institutionName}
              onChange={(event) =>
                handleEducationChange(event, key, "institutionName")
              }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Start Year"
              value={edu.startYear}
              variant="outlined"
              type="number"
              onChange={(event) =>
                handleEducationChange(event, key, "startYear")
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="End Year"
              value={edu.endYear}
              variant="outlined"
              type="number"
              onChange={(event) => handleEducationChange(event, key, "endYear")}
            />
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddEducation}
          className={classes.inputBox}
        >
          Add Another Institution
        </Button>
      </Grid>
    </>
  );
};
