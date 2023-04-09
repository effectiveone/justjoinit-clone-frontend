import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import isAuth, { userType } from "../../Utils/isAuth";
import { ApplicantButtons } from "./ApplicantButtons";
import NoLoginButtons from "./nologinButtons";
import RecruterButtons from "./RecruterButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    if (!location) {
      return;
    }
    console.log(location);
    history.push(location);
  };

  const getButtonsComponent = () => {
    if (isAuth()) {
      if (userType() === "recruiter") {
        return <RecruterButtons handleClick={handleClick} />;
      } else {
        return <ApplicantButtons handleClick={handleClick} />;
      }
    } else {
      return <NoLoginButtons handleClick={handleClick} />;
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        {getButtonsComponent()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
