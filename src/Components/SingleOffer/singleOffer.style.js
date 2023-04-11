import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#fafafa",
    width: "820px",
    overflow: "hidden",
    overflowY: "scroll",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },
  top: {
    margin: "10px",
    borderRadius: "5px",
    height: "220px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
  },
  maininfo: {
    paddingTop: "3rem",
    paddingLeft: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "55%",
    color: "white",
    fontFamily: "Open Sans, sans-serif",
  },
  btnback: {
    height: "30px",
    marginLeft: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    transform: "translateY(170%)",
    color: "white",
  },
  information: {
    transform: "translateY(-40%)",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Open Sans, sans-serif",
  },
  infodiv_1: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "180px",
    height: "70px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infodiv_2: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "180px",
    height: "70px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infodiv_3: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "180px",
    height: "70px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infodiv_4: {
    backgroundColor: "rgb(255, 255, 255)",
    width: "180px",
    height: "70px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    backgroundColor: "rgb(255, 255, 255)",
    margin: "10px",
    borderRadius: "5px",

    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
    fontFamily: "Open Sans, sans-serif",
  },
  divform: {
    backgroundColor: "rgb(255, 255, 255)",
    margin: "10px",
    borderRadius: "5px",
    height: "500px",
    boxShadow:
      " rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px",
  },
  form: {
    height: "100%",
  },
  textfield: {
    width: "45%",
    color: "rgb(191, 197, 210)",
  },
  signbtn: {
    marginLeft: "3rem",
    marginTop: "2rem",
    width: "10rem",
    borderRadius: "20px",
    textTransform: "capitalize",
  },

  icon: {
    color: "rgb(135, 152, 173)",
  },
  iconwrapper: {
    background: "rgb(255, 255, 255)",
    borderRadius: "50%",
    boxShadow:
      "rgba(0, 0, 0, 0.08) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    padding: "8px",
    top: "-30px",
  },
  infodiv_title: {
    position: "absolute",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "10px",
    marginTop: "-10px",
  },
  textarea: {
    width: "100%",
  },
  image: {
    width: "90px",
    height: "50px",
  },
  imagebox: {
    width: "120px",
    height: "120px",
    backgroundColor: "rgb(255 255 255 / 48%)",
    borderRadius: "50%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
