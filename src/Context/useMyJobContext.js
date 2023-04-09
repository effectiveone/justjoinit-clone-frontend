import { createContext, useContext } from "react";
import { useMyJob } from "../Hooks/useMyJob";

const MyJobContext = createContext();

export const useMyJobContext = () => useContext(MyJobContext);

export const MyJobProvider = ({ children }) => {
  const MyJob = useMyJob();

  return (
    <MyJobContext.Provider value={MyJob}>{children}</MyJobContext.Provider>
  );
};

export default MyJobProvider;
