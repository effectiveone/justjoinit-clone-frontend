import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiList from "../Utils/apiList";

export const useApllication = () => {
  const [applications, setApplications] = useState([]);

  const getData = useCallback(() => {
    axios
      .get(apiList.applications, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    applications,
    setApplications,
    getData,
  };
};
