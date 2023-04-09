import { createContext, useContext } from "react";
import { usePopup } from "../Hooks/usePopup";

const PopupContext = createContext();

export const usePopupContext = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const Popup = usePopup();

  return (
    <PopupContext.Provider value={Popup}>{children}</PopupContext.Provider>
  );
};

export default PopupProvider;
