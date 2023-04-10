import React from "react";
import { Box, Typography, Chip, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BuildingIcon } from "../../Utils/devIcons";
import JobLocations from "./JobLocations";
import PostLabel from "./PostLabel";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "100px 1fr 1fr",
    height: "100px",
    width: "820px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    gap: "10px",
  },
  featured: {
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      height: "100%",
      width: "5px",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
      backgroundColor: "purple",
      left: 0,
      top: 0,
    },
  },
  skillset: {
    display: "flex",
    flexDirection: "row",
  },
  left: {
    gridColumn: "1/2",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "left",
  },
  center: {
    gridColumn: "2/3",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right: {
    paddingRight: "20px",
    gap: "5px",
    gridColumn: "3/4",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  right_box: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  chip: {
    margin: "0px 10px",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: 1,
    color: "rgb(153, 161, 171)",
    height: "22px",
    display: "inline-block",
    padding: "0 7px",
    overflow: "hidden",
    fontSize: "11px",
    minWidth: "1ch",
    lineHeight: "20px",
    marginLeft: "6px",
    /* whiteSpace: "nowrap", */
    borderColor: "rgb(224, 224, 224)",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "11px",
    textOverflow: "ellipsis",
    textTransform: "lowercase",
    backgroundColor: "rgb(255, 255, 255)",
  },
  title: {
    fontWeight: "bold",
    "&:hover": {
      color: "#ff8c00",
    },
    center__box: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

function JobListing(props) {
  const classes = useStyles();

  return (
    <>
      <Box
        className={`${classes.root}${
          props.job?.featured ? ` ${classes.featured}` : ""
        }`}
      >
        <Box className={classes.left}>
          <img src="" width="85px" height="35px" />
        </Box>

        <Box className={classes.center}>
          <Box className={classes.center__box}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {props.job?.title}
            </Typography>
          </Box>
          <Box className={classes.right_box}>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BuildingIcon color="#9fa7b0" width="16px" height="16px" />
              <span style={{ fontSize: "10px", color: "rgb(153, 161, 171)" }}>
                NazwaFirmy
              </span>
            </Grid>
            <JobLocations locations={props.job?.locations} />
            {props.job?.remote && (
              <Chip
                label="Fully remote"
                size="small"
                style={{ color: "#ee72a9", backgroundColor: "#fdf5f8" }}
              />
            )}
          </Box>
        </Box>
        <Box className={classes.right}>
          <Typography variant="subtitle1">{props.job?.position}</Typography>
          <Box className={classes.right_box}>
            <Typography
              variant="body2"
              style={{ color: "#73d493", fontWeight: 400, fontSize: "16px" }}
            >
              {props.job?.salary}
            </Typography>

            <PostLabel dateOfPosting={props.job?.dateOfPosting} />
          </Box>
          <Box className={classes.skillset}>
            {props.job?.techStack?.slice(0, 3)?.map((t) => (
              <Chip label={t.name} className={classes.chip} key={t.name} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default JobListing;
