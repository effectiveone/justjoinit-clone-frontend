import { createContext, useContext } from "react";
import { useJobApplication } from "../Hooks/useJobApplication";

const JobApplicationContext = createContext();

export const useJobApplicationContext = () => useContext(JobApplicationContext);

export const JobApplicationProvider = ({ children }) => {
  const JobApplication = useJobApplication();

  return (
    <JobApplicationContext.Provider value={JobApplication}>
      {children}
    </JobApplicationContext.Provider>
  );
};

export default JobApplicationProvider;
