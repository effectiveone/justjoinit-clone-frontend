import { createContext, useContext } from "react";
import { useApplicant } from "../Hooks/useApplicant";

const ApplicantContext = createContext();

export const useApplicantContext = () => useContext(ApplicantContext);

export const ApplicantProvider = ({ children }) => {
  const Applicant = useApplicant();

  return (
    <ApplicantContext.Provider value={Applicant}>
      {children}
    </ApplicantContext.Provider>
  );
};

export default ApplicantProvider;
