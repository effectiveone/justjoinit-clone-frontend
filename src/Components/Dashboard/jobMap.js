import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCityCoords } from "../../Utils/getCityCoords";
import { useDashboardContext } from "../../Context/useDashboardContext";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mapContainer: {
    height: "500px",
    width: "500px",
  },
}));
const JobMap = () => {
  const classes = useStyles();

  const { jobs } = useDashboardContext();
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    const mapCenter = {
      lat: 52.237049,
      lng: 19.017532,
    };

    const mapInstance = L.map(mapContainerRef.current, {
      center: mapCenter,
      zoom: 7,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
    console.log("mapInstance", mapInstance);

    mapRef.current = mapInstance;
  }, [mapContainerRef]);

  useEffect(() => {
    if (!mapRef.current || !jobs || !Array.isArray(jobs) || jobs.length === 0)
      return;

    const newMarkers = jobs
      .map((job) => {
        const latLng = getCityCoords(job.locations[0]);
        if (latLng) {
          const marker = L.marker(latLng).addTo(mapRef.current);
          marker.bindPopup(`<b>${job.title}</b>`);
          return marker;
        } else {
          return null;
        }
      })
      .filter((marker) => marker !== null);

    markersRef.current = newMarkers;

    const group = L.featureGroup(markersRef.current);
    mapRef.current.fitBounds(group.getBounds());
  }, [jobs]);

  return (
    <Grid item>
      <div ref={mapContainerRef} className={classes.mapContainer} />
    </Grid>
  );
};

export default JobMap;
