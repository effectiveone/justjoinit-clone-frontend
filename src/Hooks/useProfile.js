import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { usePopupContext } from "../Context/usePopupContext";
import apiList from "../Utils/apiList";

export const useProfile = () => {
  const { setPopup } = usePopupContext();

  const [jobProfile, setJobProfile] = useState({
    name: "",
    jobs: [],
    skills: [],
    resume: "",
    profile: "",
  });

  const [jobs, setJobs] = useState([]);

  const handleInput = (key, value) => {
    setJobProfile({
      ...jobProfile,
      [key]: value,
    });
  };

  const getData = useCallback(() => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: Bearer`${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJobProfile(response.data);
        if (response.data.jobs.length > 0) {
          setJobs(
            response.data.jobs.map((job) => ({
              title: job.title ? job.title : "",
              description: job.description ? job.description : "",
              salary: job.salary ? job.salary : "",
            }))
          );
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  }, [setJobProfile, setJobs, setPopup]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleUpdate = () => {
    console.log(jobs);
    let updatedDetails = {
      ...jobProfile,
      jobs: jobs
        .filter((obj) => obj.title.trim() !== "")
        .map((obj) => {
          return obj;
        }),
    };

    axios
      .put(apiList.user, updatedDetails, {
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
        getData();
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
    jobProfile,
    jobs,
    handleInput,
    handleUpdate,
    setJobs,
    setJobProfile,
  };
};
