import { makeStyles } from "@material-ui/core/styles";
export const useStyleses = makeStyles(() => ({
  pin: {
    marginRight: "5px",
    color: "9fa7b0",
    width: "24px",
    height: "24px",
  },
  location: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  locationlist: {
    position: "absolute",
    display: "flex",
    zIndex: 2,
    // left: "43px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
  },
  expandIcon: {
    size: "10px",
    marginLeft: "5px",
    color: "white",
    transition: "transform 0.2s ease",
  },
  locationItem: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    width: "300x",
    paddingLeft: "5px",
    color: "#9fa7b0",
    "&:hover": {
      backgroundColor: "grey",
      cursor: "pointer",
    },
  },
  rotate: {
    transform: "rotate(180deg)",
  },
  company: {
    display: "flex",
    alignItems: "center",
  },
  spacer: {
    width: "24px",
  },
}));
