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
  inputBox: {
    width: "300px",
  },
}));

const ProfileTextField = ({ label, value, onChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    className={useStyles().inputBox}
    variant="outlined"
    fullWidth
  />
);

export const Profile = () => {
  const { jobProfile, handleInput, handleUpdate } = useProfileContext();

  const setProfileDetails = (updatedProfileDetails) => {
    handleInput("profileDetails", updatedProfileDetails, jobProfile);
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
              <ProfileTextField
                label="Name"
                value={jobProfile.profileDetails.name}
                onChange={(event) =>
                  handleInput("name", event.target.value, jobProfile)
                }
              />
            </Grid>
            <MultifieldInput />
            <Grid item>
              <ChipInput
                className={useStyles().inputBox}
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skills"
                value={jobProfile.profileDetails.skills}
                onAdd={(chip) =>
                  setProfileDetails({
                    ...jobProfile.profileDetails,
                    skills: [...jobProfile.profileDetails.skills, chip],
                  })
                }
                onDelete={(chip, index) => {
                  let skills = jobProfile.profileDetails.skills;
                  skills.splice(index, 1);
                  setProfileDetails({
                    ...jobProfile.profileDetails,
                    skills: skills,
                  });
                }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={useStyles().inputBox}
                label="Resume (.pdf)"
                icon={<DescriptionIcon />}
                uploadTo={apiList.uploadResume}
                handleInput={handleInput}
                identifier={"resume"}
              />
            </Grid>
            <Grid item>
              <FileUploadInput
                className={useStyles().inputBox}
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
