import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    minWidth: 300,
  },
  closeBtn: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  header: {
    color: "rgb(119, 119, 119)",
    fontWeight: 700,
    fontSize: "1.75rem",
    paddingBottom: "10px",
  },
  city: {
    paddingTop: "10px",
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  locationButton: {
    borderRadius: 32,
    textTransform: "none",
    fontWeight: 600,
    fontSize: 14,
    color: "#777",
    backgroundColor: "#fff",
    borderColor: "#e4e8f0",
    margin: theme.spacing(1),
  },
}));

function LocationModal({ open, handleClose, handleLocationClick }) {
  const classes = useStyles();
  const locations = [
    "Warszawa",
    "Kraków",
    "Wrocław",
    "Poznan",
    "Trojmiasto",
    "Śląsk",
  ];
  const worldLocations = [
    "New York",
    "Seattle",
    "Berlin",
    "San Francisco",
    "London",
  ];

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Button onClick={handleClose} className={classes.closeBtn}>
            Close
          </Button>
          <div className={classes.header}>Location</div>
          <div className={classes.city}>Top Poland</div>
          {locations.map((location) => (
            <Button
              key={location}
              variant="outlined"
              onClick={() => handleLocationClick(location)}
              className={classes.locationButton}
            >
              {location}
            </Button>
          ))}
          <div className={classes.city}>Top World </div>
          {worldLocations.map((location) => (
            <Button
              key={location}
              variant="outlined"
              onClick={() => handleLocationClick(location)}
              className={classes.locationButton}
            >
              {location}
            </Button>
          ))}
        </div>
      </Fade>
    </Modal>
  );
}

export default LocationModal;
