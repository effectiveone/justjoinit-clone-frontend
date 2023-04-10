import React from "react";
import { Button } from "@material-ui/core";
import RegisterButton from "./RegisterButton";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    justifyContent: "inherit",
    color: "#99A1AB",
    fontSize: "14px",
    textDecoration: "none",
    fontFamily: "Open Sans,sans-serif",
    fontWeight: 600,
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "#ec4d80",
    },
  },
}));

const NoLoginButtons = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" data-testid="mock-nologin-buttons">
        <Link to="/" className={classes.link}>
          Offers
        </Link>
        <Link to="/" className={classes.link}>
          Brand Stories
        </Link>
        <Link to="/" className={classes.link}>
          Geek
        </Link>
        <Link to="/" className={classes.link}>
          Matchmaking
        </Link>
      </Typography>
      <Button color="inherit" onClick={() => handleClick("/login")}>
        Login
      </Button>
      <RegisterButton handleClick={handleClick} />
    </>
  );
};

export default NoLoginButtons;
