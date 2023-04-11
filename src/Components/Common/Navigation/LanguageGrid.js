import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { devIcons } from "../../../Utils/devIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  iconButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 90,
    marginTop: 20,
    padding: "0px 5px",
    gap: "5px",
    marginRight: "10px",
  },
  icon: {
    marginBottom: 0,
    width: 20,
    height: 20,
    color: "white", // or any other default color you want
    borderRadius: "50%",
  },
}));

function LanguageGrid({ handleLanguageClick }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="flex-start"
      style={{ transition: "all width 3s ease" }}
    >
      {devIcons.map((language, index) => (
        <Grid item key={index} xs className={classes.iconWrapper}>
          <IconButton
            onClick={() => handleLanguageClick(language.value)}
            className={classes.iconButton}
            style={{ backgroundColor: language.background }}
          >
            <i className={`${language.icon} ${classes.icon}`}></i>
          </IconButton>
          <Typography variant="subtitle2" align="center">
            {language.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default LanguageGrid;
