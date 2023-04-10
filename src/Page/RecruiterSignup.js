import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import PasswordInput from "../Components/Login/PasswordInput";
import EmailInput from "../Components/Login/EmailInput";

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

const RecruiterSignup = () => {
  const classes = useStyles();

  const {
    signupDetails,
    inputErrorHandler,
    handleInput,
    handleInputError,
    setPhone,
    phone,
    handleLoginRecruiter,
    loggedin,
  } = useSignup({ userType: "recruiter" });

  const handleBioChange = (event) => {
    if (
      event.target.value.split(" ").filter(function (n) {
        return n !== "";
      }).length <= 250
    ) {
      handleInput("bio", event.target.value);
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Signup as a Recruiter
          </Typography>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <TextField
            label="Company Name"
            value={signupDetails?.companyName}
            onChange={(event) => handleInput("companyName", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler?.companyName.error}
            helperText={inputErrorHandler?.companyName?.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError(
                  "companyName",
                  true,
                  "Company name is required"
                );
              } else {
                handleInputError("companyName", false, "");
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
        <Grid item style={{ width: "100%" }}>
          <TextField
            label="Bio (upto 250 words)"
            multiline
            minRows={8}
            style={{ width: "100%" }}
            variant="outlined"
            value={signupDetails?.bio}
            onChange={handleBioChange}
          />
        </Grid>
        <Grid item>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoginRecruiter}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Layout(RecruiterSignup);
