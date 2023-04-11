import { Box, Button, Divider, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./singleOffer.style";
import {
  ProgressIcon,
  BuildingsIcon,
  NewIcon,
  PeopleIcon,
} from "../../Utils/devIcons";
import { useDashboardContext } from "../../Context/useDashboardContext";
import { daysAgo } from "../../Utils/dates";
import { Rating } from "@material-ui/lab";
import { Chip } from "@material-ui/core";
import JobLocations from "../Common/JobLocations";
import { useStyleses } from "./JobLocations.style";
import { devIcons } from "../../Utils/devIcons";

const SingleOffer = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const { selectedJob } = useDashboardContext();

  const levelOfSeniority = {
    1: "Nice to have",
    2: "Junior",
    3: "Regular",
    4: "Advanced",
    5: "Master",
  };

  function getBackgroundForSkill(skillName) {
    const devIcon = devIcons.find(
      (icon) => icon.name?.toLowerCase() === skillName?.toLowerCase()
    );
    return devIcon ? devIcon.background : "rgba(245,0,87,0.5116421568627452)";
  }

  const backgroundEffect = getBackgroundForSkill(
    selectedJob?.techStack?.[0]?.name
  );

  return (
    <>
      <Box className={classes.box}>
        <Button className={classes.btnback} onClick={handleClick}>
          <ArrowBack />
        </Button>
        <div
          className={classes.top}
          style={{
            background: `linear-gradient(0deg, white 0%,  ${backgroundEffect} 37%)`,
          }}
        >
          <div className={classes.maininfo}>
            <div className={classes.imagebox}>
              <img className={classes.image} src="" />
            </div>
            <div>
              <Typography variant="h5">{selectedJob.title}</Typography>
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <JobLocations
                  useStyles={useStyleses}
                  locations={selectedJob?.locations}
                />
                {selectedJob.remote && (
                  <Chip
                    label="Fully remote"
                    size="small"
                    style={{
                      marginLeft: "20px",
                      color: "#ee72a9",
                      backgroundColor: "#fdf5f8",
                    }}
                  />
                )}
              </Box>
              <Typography>{selectedJob.salary}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.information}>
          <Typography className={classes.infodiv_1}>
            <Box className={classes.iconwrapper}>
              <BuildingsIcon
                style={{
                  fill: "rgb(255, 82, 82)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            <div className={classes.infodiv_title}>
              <span>{selectedJob.companyName ?? "no name"}</span>
              <p>Company name</p>
            </div>
          </Typography>
          <Typography className={classes.infodiv_2}>
            <Box className={classes.iconwrapper}>
              <PeopleIcon
                style={{
                  fill: "rgb(251, 140, 0)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            <div className={classes.infodiv_title}>
              <span>{selectedJob.companySize}</span>
              <p>Company size</p>
            </div>
          </Typography>
          <Typography className={classes.infodiv_3}>
            <Box className={classes.iconwrapper}>
              <ProgressIcon
                style={{
                  fill: "rgb(102, 187, 106)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            <div className={classes.infodiv_title}>
              <span>{selectedJob.seniority}</span>
              <p>EXP.lvl</p>
            </div>
          </Typography>{" "}
          ,
          <Typography className={classes.infodiv_4}>
            <Box className={classes.iconwrapper}>
              <NewIcon
                style={{
                  fill: "rgb(68, 138, 255)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            <div className={classes.infodiv_title}>
              <span>{daysAgo(selectedJob.dateOfPosting)}</span>
              <p>new</p>
            </div>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography style={{ margin: "10px 20px", padding: "10px 20px" }}>
            Tech Stack
          </Typography>
          <Divider />
          <div
            style={{
              margin: "10px 20px",
              padding: "10px 20px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "50px",

              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {selectedJob.techStack?.map((tech, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <Rating value={tech.value} readOnly />
                <span style={{ fontWeight: 600, fontSize: "14px" }}>
                  {tech.name}
                </span>
                <Box
                  style={{
                    alignSelf: "flexStart",
                    fontSize: "10px",
                    color: "#9fa7b0",
                  }}
                >
                  {levelOfSeniority[tech.value]}
                </Box>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.description}>
          <Typography style={{ margin: "10px 20px", padding: "10px 20px" }}>
            Description
          </Typography>
          <Divider />
          <Typography style={{ margin: "10px 20px", padding: "10px 20px" }}>
            {selectedJob?.description}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.signbtn}
        >
          Apply
        </Button>
      </Box>
    </>
  );
};

export default SingleOffer;
