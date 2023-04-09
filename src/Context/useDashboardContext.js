import { createContext, useContext } from "react";
import { useDashboard } from "../Hooks/useDashboard";

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const Dashboard = useDashboard();

  return (
    <DashboardContext.Provider value={Dashboard}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
