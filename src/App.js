import { createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { ErrorPage } from "./Page/WelcomePage";
import LoginPage from "./Page/LoginPage";
import LogoutPage from "./Page/LogoutPage";
import RecruiterSignup from "./Page/RecruiterSignup";
import ApplicantSignup from "./Page/ApplicantSignup";
import HomePage from "./Page/HomePage";
import ApplicationsPage from "./Page/ApplicationsPage";
import ProfilePage from "./Page/ProfilePage";
import CreateJobsPage from "./Page/recruiter/CreateJobsPage";
import MyJobsPage from "./Page/recruiter/MyJobsPage";
import JobApplicationsPage from "./Page/recruiter/JobApplicationsPage";
import AcceptedApplicantsPage from "./Page/recruiter/AcceptedApplicantsPage";
import RecruiterProfilePage from "./Page/recruiter/ProfilePage";
import MessagePopup from "./Utils/MessagePopup";
import { userType } from "./Utils/isAuth";
import { PopupProvider } from "./Context/usePopupContext";
import OfferPage from "./Page/OfferPage";
const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();

  return (
    <PopupProvider>
      <BrowserRouter>
        <Grid container direction="column">
          <Grid item className={classes.body}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/offers/:id" component={OfferPage} />

              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/recruitersignup">
                <RecruiterSignup />
              </Route>
              <Route exact path="/applicantsignup">
                <ApplicantSignup />
              </Route>
              <Route exact path="/logout">
                <LogoutPage />
              </Route>
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route exact path="/applications">
                <ApplicationsPage />
              </Route>
              <Route exact path="/profile">
                {userType() === "recruiter" ? (
                  <RecruiterProfilePage />
                ) : (
                  <ProfilePage />
                )}
              </Route>
              <Route exact path="/addjob">
                <CreateJobsPage />
              </Route>
              <Route exact path="/myjobs">
                <MyJobsPage />
              </Route>
              <Route exact path="/job/applications/:jobId">
                <JobApplicationsPage />
              </Route>
              <Route exact path="/employees">
                <AcceptedApplicantsPage />
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </Grid>
        </Grid>
        <MessagePopup />
      </BrowserRouter>
    </PopupProvider>
  );
}

export default App;
