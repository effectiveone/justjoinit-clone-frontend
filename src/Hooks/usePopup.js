import { useState } from "react";

export const usePopup = () => {
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return {
    popup,
    setPopup,
  };
};
