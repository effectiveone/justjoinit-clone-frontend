import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { usePopupContext } from "../Context/usePopupContext";

const LogoutPage = () => {
  const { setPopup } = usePopupContext();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    setPopup({
      open: true,
      severity: "success",
      message: "Logged out successfully",
    });
  }, [setPopup]);
  return <Redirect to="/login" />;
};

export default LogoutPage;
