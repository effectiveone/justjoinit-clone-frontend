import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { devIcons } from "../../Utils/devIcons";

const CustomLanguageSelect = ({ handleLanguageClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small">
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ top: "50px", left: "-40px" }}
      >
        {devIcons.map((language, index) => (
          <MenuItem
            key={index}
            onClick={() => handleLanguageClick(language.name)}
          >
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <i
                  className={`${language.icon}`}
                  style={{ color: language.background }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">{language.name}</Typography>
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomLanguageSelect;
