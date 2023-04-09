import { useState } from "react";
import axios from "axios";
import apiList from "../Utils/apiList";
import { usePopupContext } from "../Context/usePopupContext";

export const useCreateJob = () => {
  const { setPopup } = usePopupContext();

  const [jobDetails, setJobDetails] = useState({
    userId: "",
    title: "",
    remote: false,
    locations: [],
    description: "",
    techStack: [],
    companySize: 0,
    seniority: "",
    logo: "",
    maxApplicants: 0,
    maxPositions: 0,
    activeApplications: 0,
    acceptedCandidates: 0,
    dateOfPosting: new Date(),
    deadline: new Date(),
    skillsets: [],
    jobType: "",
    duration: 0,
    salary: 0,
    rating: -1.0,
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setJobDetails({
          userId: "",
          title: "",
          remote: false,
          locations: [],
          description: "",
          techStack: [],
          companySize: 0,
          seniority: "",
          logo: "",
          maxApplicants: 0,
          maxPositions: 0,
          activeApplications: 0,
          acceptedCandidates: 0,
          dateOfPosting: new Date(),
          deadline: new Date(),
          skillsets: [],
          jobType: "",
          duration: 0,
          salary: 0,
          rating: -1.0,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };

  return {
    setPopup,
    setJobDetails,
    jobDetails,
    handleInput,
    handleUpdate,
  };
};
