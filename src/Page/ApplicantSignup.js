import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import "react-phone-input-2/lib/material.css";

import PasswordInput from "../Components/Login/PasswordInput";
import EmailInput from "../Components/Login/EmailInput";
import FileUploadInput from "../Utils/FileUploadInput";
import { MultifieldInput } from "../Components/Common/MultifieldInput";
import apiList from "../Utils/apiList";

import Layout from "../Components/Layout/Layout";
import { useSignup } from "../Hooks/useSignup";

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

const ApplicantSignup = () => {
  const classes = useStyles();

  const {
    signupDetails,
    inputErrorHandler,
    handleInput,
    handleInputError,
    handleLogin,
    education,
    setEducation,

    loggedin,
  } = useSignup({ userType: "applicant" });

  const handleSkillsChange = (skills) => {
    handleInput("skills", skills);
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Signup as an Applicant
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            value={signupDetails?.name}
            onChange={(event) => handleInput("name", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler?.name?.error}
            helperText={inputErrorHandler?.name?.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("name", true, "Name is required");
              } else {
                handleInputError("name", false, "");
              }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={signupDetails?.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
            required={true}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={signupDetails?.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler?.password?.error}
            helperText={inputErrorHandler?.password?.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("password", true, "Password is required");
              } else {
                handleInputError("password", false, "");
              }
            }}
          />
        </Grid>
        <MultifieldInput education={education} setEducation={setEducation} />
        <Grid item>
          <ChipInput
            className={classes.inputBox}
            label="Skills"
            variant="outlined"
            helperText="Press enter to add skills"
            value={signupDetails?.skills}
            onChange={handleSkillsChange}
          />
        </Grid>
        <Grid item>
          <FileUploadInput
            className={classes.inputBox}
            label="Resume (.pdf)"
            icon={<DescriptionIcon />}
            uploadTo={apiList?.uploadResume}
            handleInput={handleInput}
            identifier={"resume"}
          />
        </Grid>
        <Grid item>
          <FileUploadInput
            className={classes.inputBox}
            label="Profile Photo (.jpg/.png)"
            icon={<FaceIcon />}
            uploadTo={apiList?.uploadProfileImage}
            handleInput={handleInput}
            identifier={"profile"}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Layout(ApplicantSignup);
