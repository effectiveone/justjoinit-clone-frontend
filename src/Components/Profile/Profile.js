import {
  Button,
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import FileUploadInput from "../../Utils/FileUploadInput";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";

import apiList from "../../Utils/apiList";
import { MultifieldInput } from "./MultifieldInput";
import { useProfileContext } from "../../Context/useProfileContext";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
  inputBox: {
    width: "300px",
  },
}));

export const Profile = () => {
  const classes = useStyles();
  const {
    jobProfile,
    jobProfile: { profileDetails },
    handleInput,
    handleUpdate,
    setJobProfile,
  } = useProfileContext();

  const setProfileDetails = (updatedProfileDetails) => {
    setJobProfile((prevJobProfile) => ({
      ...prevJobProfile,
      profileDetails: updatedProfileDetails,
    }));
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Profile</Typography>
      </Grid>
      <Grid item xs>
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
          <Grid container direction="column" alignItems="stretch" spacing={3}>
            <Grid item>
              <TextField
                label="Name"
                value={profileDetails.name}
                onChange={(event) =>
                  handleInput("name", event.target.value, jobProfile)
                }
                className={classes.inputBox}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <MultifieldInput
              jobProfile={jobProfile}
              setJobProfile={setJobProfile}
            />
            <Grid item>
              <ChipInput
                className={classes.inputBox}
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skills"
                value={profileDetails.skills}
                onAdd={(chip) =>
                  setProfileDetails({
                    ...profileDetails,
                    skills: [...profileDetails.skills, chip],
                  })
                }
                onDelete={(chip, index) => {
                  let skills = profileDetails.skills;
                  skills.splice(index, 1);
                  setProfileDetails({
                    ...profileDetails,
                    skills: skills,
                  });
                }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={classes.inputBox}
                label="Resume (.pdf)"
                icon={<DescriptionIcon />}
                uploadTo={apiList.uploadResume}
                handleInput={handleInput}
                identifier={"resume"}
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={classes.inputBox}
                label="Profile Photo (.jpg/.png)"
                icon={<FaceIcon />}
                uploadTo={apiList.uploadProfileImage}
                handleInput={handleInput}
                identifier={"profile"}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update Details
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};
