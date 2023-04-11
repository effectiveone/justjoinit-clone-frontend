import React from "react";
import SingleOffer from "../Components/SingleOffer/singleOffer";
import Navigation from "../Components/Common/Navigation/Navigation";
import DashboardProvider from "../Context/useDashboardContext";
import Layout from "../Components/Layout/Layout";

const OfferPage = () => {
  return (
    <>
      <DashboardProvider>
        <Navigation>
          <SingleOffer />
        </Navigation>
      </DashboardProvider>
    </>
  );
};

export default Layout(OfferPage);
