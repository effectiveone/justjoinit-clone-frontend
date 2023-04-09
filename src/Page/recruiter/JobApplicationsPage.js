import JobApplications from "../../Components/JobApplications/JobApplication";
import JobApplicationProvider from "../../Context/useJobApplicationContext";
import Layout from "../../Components/Layout/Layout";

const JobApplicationsPage = () => {
  return (
    <>
      <JobApplicationProvider>
        <JobApplications />
      </JobApplicationProvider>
    </>
  );
};

export default Layout(JobApplicationsPage);
