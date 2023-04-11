import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCityCoords } from "../../../Utils/getCityCoords";
import { useDashboardContext } from "../../../Context/useDashboardContext";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { devIcons } from "../../../Utils/devIcons";
import "devicon/devicon.min.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";

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
  const markerClusterGroupRef = useRef(null);
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
            "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
        }),
      ],
    });

    // Create a new MarkerClusterGroup and add it to the map
    const markerClusterGroup = L.markerClusterGroup();
    markerClusterGroupRef.current = markerClusterGroup;
    mapInstance.addLayer(markerClusterGroup);

    mapRef.current = mapInstance;
  }, [mapContainerRef]);

  useEffect(() => {
    if (!mapRef.current || !jobs || !Array.isArray(jobs) || jobs.length === 0)
      return;

    const newMarkers = jobs
      .map((job) => {
        const latLng = getCityCoords(job.locations[0]);
        if (!latLng) return null;

        const techSkills = job.techStack || [];
        const matchingSkill = devIcons.find(
          (icon) => icon.name === techSkills[0]?.name
        );
        if (!matchingSkill) return null;

        const markerIcon = L.divIcon({
          html: `<i class="${matchingSkill.icon}" style="background-color:${matchingSkill.background}, "></i>`,
          iconSize: [30, 30],
          iconAnchor: [40, 40], // add this style to center the markerIcon over the marker's coordinates
          className: classes.markerIcon,
        });

        const marker = L.marker(latLng, { icon: markerIcon });

        marker.bindPopup(`<b>${job.title}</b>`);

        // Add the marker to the MarkerClusterGroup instead of directly to the map
        markerClusterGroupRef.current.addLayer(marker);

        return marker;
      })
      .filter((marker) => marker !== null);

    markersRef.current = newMarkers;

    if (newMarkers.length > 0) {
      // Fit the bounds to the MarkerClusterGroup instead of the group of individual markers
      mapRef.current.fitBounds(markerClusterGroupRef.current.getBounds());
    }
  }, [jobs]);

  return (
    <Grid item>
      <div ref={mapContainerRef} className={classes.mapContainer} />
    </Grid>
  );
};

export default JobMap;
