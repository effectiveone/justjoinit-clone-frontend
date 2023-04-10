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
        return (
          <RecruterButtons
            handleClick={handleClick}
            data-testid="recruiter-buttons"
          />
        );
      } else {
        return (
          <ApplicantButtons
            handleClick={handleClick}
            data-testid="applicant-buttons"
          />
        );
      }
    } else {
      return (
        <NoLoginButtons
          handleClick={handleClick}
          data-testid="nologin-buttons"
        />
      );
    }
  };

  return (
    <nav data-testid="mock-navbar">
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fff", color: "black" }}
        data-testid="appbar"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
          data-testid="toolbar"
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            data-testid="navbar-left"
          >
            <img
              src={navbarLogo}
              alt="Just Join"
              width="126px"
              height="40px"
              data-testid="navbar-logo"
            />
            <Typography data-testid="navbar-description">
              #1 Job Board for tech industry in Europe
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            data-testid="navbar-right"
          >
            {getButtonsComponent()}
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
