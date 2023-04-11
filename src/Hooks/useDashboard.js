import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiList from "../Utils/apiList";
import { usePopupContext } from "../Context/usePopupContext";
import { useParams } from "react-router-dom";

export const useDashboard = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
      salary: {
        status: false,
        desc: false,
      },
      duration: {
        status: false,
        desc: false,
      },
      rating: {
        status: false,
        desc: false,
      },
    },
    location: "",
  });
  const { setPopup } = usePopupContext();

  useEffect(() => {
    if (id) {
      axios
        .get(`${apiList.jobs}/${id}`)
        .then((response) => {
          setSelectedJob(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          setPopup({
            open: true,
            severity: "error",
            message: "Error",
          });
        });
    } else {
      setSelectedJob(null);
    }
  }, [id]);

  const getData = useCallback(() => {
    let searchParams = [];
    console.log("searchParams", searchParams);
    // Check if searchOptions.query is not an empty string and add it to searchParams
    if (searchOptions.query !== "") {
      searchParams = [...searchParams, `q=${searchOptions.query}`];
    }

    // Check jobType filters and add them to searchParams
    if (searchOptions.jobType.fullTime) {
      searchParams = [...searchParams, "jobType=Full%20Time"];
    }
    if (searchOptions.jobType.partTime) {
      searchParams = [...searchParams, "jobType=Part%20Time"];
    }
    if (searchOptions.jobType.wfh) {
      searchParams = [...searchParams, "jobType=Work%20From%20Home"];
    }

    // Check if salary filters are set and add them to searchParams
    if (searchOptions.salary[0] !== 0) {
      searchParams = [
        ...searchParams,
        `salaryMin=${searchOptions.salary[0] * 1000}`,
      ];
    }
    if (searchOptions.salary[1] !== 100) {
      searchParams = [
        ...searchParams,
        `salaryMax=${searchOptions.salary[1] * 1000}`,
      ];
    }

    // Check if duration filter is set and add it to searchParams
    if (searchOptions.duration !== "0") {
      searchParams = [...searchParams, `duration=${searchOptions.duration}`];
    }

    if (searchOptions.location !== "") {
      searchParams = [...searchParams, `location=${searchOptions.location}`];
    }

    // Check if techStack filter is set and add it to searchParams
    if (searchOptions.techStack?.length > 0) {
      searchParams = [...searchParams, `techStack=${searchOptions.techStack}`];
    }

    let asc = [];
    let desc = [];

    // Loop through each property in the searchOptions.sort object
    Object.keys(searchOptions.sort).forEach((obj) => {
      const item = searchOptions.sort[obj];

      // If item.status is true, add "asc={obj}" or "desc={obj}" to the appropriate array
      if (item.status) {
        if (item.desc) {
          desc = [...desc, `desc=${obj}`];
        } else {
          asc = [...asc, `asc=${obj}`];
        }
      }
    });

    // Add all elements in the asc and desc arrays to the searchParams array
    searchParams = [...searchParams, ...asc, ...desc];

    // Join all elements in the searchParams array with "&" and store in queryString
    const queryString = searchParams.join("&");

    // Set the initial address to apiList.alljobs
    let address = apiList.alljobs;

    // If queryString is not an empty string, add it to the address
    if (queryString !== "") {
      address = `${address}?${queryString}`;
    }

    // Make a GET request to the address with an Authorization header
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setJobs(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  }, [searchOptions, setPopup]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    jobs,
    filterOpen,
    searchOptions,
    setFilterOpen,
    setSearchOptions,
    getData,
    selectedJob,
  };
};
