import DashboardProvider from "../Context/useDashboardContext";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import Layout from "../Components/Layout/Layout";

const HomePage = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default Layout(HomePage);
