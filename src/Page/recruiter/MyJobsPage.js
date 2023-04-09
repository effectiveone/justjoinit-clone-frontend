import Layout from "../../Components/Layout/Layout";
import MyJobProvider from "../../Context/useMyJobContext";
import MyJobs from "../../Components/MyJob/MyJob";

const MyJobsPage = () => {
  return (
    <>
      <MyJobProvider>
        <MyJobs />
      </MyJobProvider>
    </>
  );
};

export default Layout(MyJobsPage);
