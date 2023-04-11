import React from "react";
import { render } from "@testing-library/react";
import JobMap from "./jobMap";

describe("JobMap", () => {
  test("renders a map container", () => {
    const { container } = render(<JobMap />);
    const mapContainer = container.querySelector(".mapContainer");
    expect(mapContainer).toBeInTheDocument();
  });

  test("renders a leaflet map with a tile layer", () => {
    const { container } = render(<JobMap />);
    const tileLayer = container.querySelector(".leaflet-tile-pane");
    expect(tileLayer).toBeInTheDocument();
  });

  test("adds markers to the map for each job", () => {
    const jobs = [
      {
        id: "1",
        title: "Front-end Developer",
        locations: ["New York, NY"],
        techStack: [{ name: "javascript", label: "JavaScript" }],
      },
      {
        id: "2",
        title: "Full-stack Developer",
        locations: ["San Francisco, CA"],
        techStack: [{ name: "nodejs", label: "Node.js" }],
      },
    ];
    const { container } = render(<JobMap jobs={jobs} />);
    const markerIcons = container.querySelectorAll(".leaflet-marker-icon");
    expect(markerIcons.length).toBe(2);
  });

  test("fits the map bounds to the marker cluster group when markers are added", () => {
    const jobs = [
      {
        id: "1",
        title: "Front-end Developer",
        locations: ["New York, NY"],
        techStack: [{ name: "javascript", label: "JavaScript" }],
      },
      {
        id: "2",
        title: "Full-stack Developer",
        locations: ["San Francisco, CA"],
        techStack: [{ name: "nodejs", label: "Node.js" }],
      },
    ];
    const { container } = render(<JobMap jobs={jobs} />);
    const mapInstance = container.querySelector(".leaflet-map-pane").__vue__;
    expect(mapInstance._animateToZoom).toBe(11);
  });
});
