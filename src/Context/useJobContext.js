import { createContext, useContext } from "react";
import { useJob } from "../Hooks/useJob";

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const Job = useJob();

  return <JobContext.Provider value={Job}>{children}</JobContext.Provider>;
};

export default JobProvider;
