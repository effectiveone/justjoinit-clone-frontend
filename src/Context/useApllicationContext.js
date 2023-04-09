import { createContext, useContext } from "react";
import { useApllication } from "../Hooks/useApllication";

const ApllicationContext = createContext();

export const useApllicationContext = () => useContext(ApllicationContext);

export const ApllicationProvider = ({ children }) => {
  const Apllication = useApllication();

  return (
    <ApllicationContext.Provider value={Apllication}>
      {children}
    </ApllicationContext.Provider>
  );
};

export default ApllicationProvider;
