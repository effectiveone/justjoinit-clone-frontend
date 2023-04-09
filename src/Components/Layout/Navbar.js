import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import isAuth, { userType } from "../../Utils/isAuth";
import { ApplicantButtons } from "./ApplicantButtons";
import NoLoginButtons from "./nologinButtons";
import RecruterButtons from "./RecruterButtons";
import navbarLogo from "../../justjoinit.png";

const Navbar = () => {
  let history = useHistory();

  const handleClick = (location) => {
    if (!location) {
      return;
    }
    console.log(location);
    history.push(location);
  };

  const getButtonsComponent = () => {
    if (isAuth()) {
      if (userType() === "recruiter") {
        return <RecruterButtons handleClick={handleClick} />;
      } else {
        return <ApplicantButtons handleClick={handleClick} />;
      }
    } else {
      return <NoLoginButtons handleClick={handleClick} />;
    }
  };

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#fff", color: "black" }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={navbarLogo} alt="Just Join" width="126px" height="40px" />
          <Typography>#1 Job Board for tech industry in Europe</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {getButtonsComponent()}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
