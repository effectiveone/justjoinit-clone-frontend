import { Grid, Button, Typography, makeStyles, Paper } from "@material-ui/core";

import { Redirect } from "react-router-dom";

import PasswordInput from "../Components/Login/PasswordInput";
import EmailInput from "../Components/Login/EmailInput";
import { usePopupContext } from "../Context/usePopupContext";

import Layout from "../Components/Layout/Layout";
import { useLogin } from "../Hooks/useLogin";

const useStyles = makeStyles(() => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { setPopup } = usePopupContext();
  const {
    loggedin,
    loginDetails,
    inputErrorHandler,
    handleInput,
    handleInputError,
    handleLogin,
  } = useLogin(setPopup);

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={loginDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={loginDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            className={classes.submitButton}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Layout(LoginPage);
