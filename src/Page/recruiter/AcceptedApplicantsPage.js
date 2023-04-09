import { Applicants } from "../../Components/AcceptApplication/Applicants";
import ApplicantProvider from "../../Context/useApplicantContext";
import Layout from "../../Components/Layout/Layout";

const AcceptedApplicantsPage = () => {
  return (
    <>
      <ApplicantProvider>
        <Applicants />
      </ApplicantProvider>
    </>
  );
};

export default Layout(AcceptedApplicantsPage);
