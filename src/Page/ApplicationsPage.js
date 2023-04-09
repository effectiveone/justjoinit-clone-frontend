import React from "react";
import { Applications } from "../Components/Applications/Applications";
import ApllicationProvider from "../Context/useApllicationContext";
import Layout from "../Components/Layout/Layout";

const ApplicationsPage = () => {
  return (
    <>
      <ApllicationProvider>
        <Applications />
      </ApllicationProvider>
    </>
  );
};

export default Layout(ApplicationsPage);
