import React, { useState } from "react";
import { Box, IconButton, List, ListItem, Typography } from "@material-ui/core";
import { Room, ExpandMore } from "@material-ui/icons";

function JobLocations({ locations, useStyles }) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const locationCount = locations?.length;

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      {Array.isArray(locations) && locations.length > 0 && (
        <>
          {locationCount === 1 ? (
            <Box className={classes.location}>
              <Room className={classes.pin} />
              <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
                {locations[0]}
              </Typography>
            </Box>
          ) : (
            <Box className={classes.location}>
              <Room className={classes.pin} />
              <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
                {locations[0]}
              </Typography>
              <>
                <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
                  +{locationCount - 1}
                </Typography>
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
        </>
      )}
    </Box>
  );
}

export default JobLocations;
