import { makeStyles } from "@material-ui/core/styles";
export const useStyleses = makeStyles(() => ({
  pin: {
    marginRight: "5px",
    color: "#9fa7b0",
    width: "16px",
    height: "16px",
  },
  location: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    fontSize: "10px",
    color: "rgb(153, 161, 171)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  locationlist: {
    position: "absolute",
    display: "flex",
    zIndex: 2,
    left: "43px",
    alignItems: "center",
    flexDirection: "column",
    width: "820px",
    backgroundColor: "white",
  },
  expandIcon: {
    size: "10px",
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
  company: {
    display: "flex",
    alignItems: "center",
  },
  spacer: {
    width: "24px",
  },
}));
