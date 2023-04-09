import React, { useState } from "react";
import { Box, IconButton, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Room, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  pin: {
    marginRight: "5px",
    color: "#9fa7b0",
  },
  location: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  locationlist: {
    position: "absolute",
    display: "flex",
    zIndex: 2,
    left: "10px",
    alignItems: "center",
    flexDirection: "column",
    width: "820px",
    backgroundColor: "white",
    // top: "0px",
  },
  expandIcon: {
    marginLeft: "5px",
    color: "#777",
    transition: "transform 0.2s ease",
  },
  locationItem: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    width: "820px",
    paddingLeft: "5px",
    "&:hover": {
      backgroundColor: "#9fa7b0",
      cursor: "pointer",
    },
  },
  rotate: {
    transform: "rotate(180deg)",
  },
}));

function JobLocations({ locations }) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const locationCount = locations.length;

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      {locationCount === 1 ? (
        <Box className={classes.location}>
          <Room className={classes.pin} />
          <Typography variant="subtitle1">{locations[0]}</Typography>
        </Box>
      ) : (
        <Box className={classes.location}>
          <Room className={classes.pin} />
          <Typography variant="subtitle1">{locations[0]}</Typography>
          <>
            <Typography variant="subtitle1">+{locationCount - 1}</Typography>
            <IconButton
              className={`${classes.expandIcon} ${
                isExpanded && classes.rotate
              }`}
              size="small"
              onClick={handleClick}
            >
              <ExpandMore />
            </IconButton>
          </>
        </Box>
      )}
      {isExpanded && (
        <List className={classes.locationlist}>
          {locations.slice(1).map((location, index) => (
            <ListItem key={index} className={classes.locationItem}>
              <Room className={classes.pin} />
              <Typography variant="subtitle1">{location}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default JobLocations;
