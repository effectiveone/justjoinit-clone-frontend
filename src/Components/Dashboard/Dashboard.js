import React from "react";
import Navigation from "../Common/Navigation/Navigation";
import { JobContainer } from "./JobContainer";
// import SingleOffer from "../SingleOffer/singleOffer";

export const Dashboard = () => {
  return (
    <>
      <Navigation>
        <JobContainer />
      </Navigation>
    </>
  );
};
