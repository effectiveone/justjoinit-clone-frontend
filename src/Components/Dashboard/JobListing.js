import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";
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
    gridColumn: "3/4",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  right_box: {
    display: "flex",
    flexDirection: "row",
  },
  chip: {
    margin: "0px 10px",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: 1,
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
    building: {
      display: "flex",
      alignItems: "center",
      gap: "2px",
      lineHeight: 1,
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
            <Box className={classes.building}>
              <BuildingIcon color="#9fa7b0" />
              <span>NazwaFirmy</span>
            </Box>
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
