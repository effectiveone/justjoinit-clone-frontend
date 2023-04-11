import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import "devicon/devicon.min.css";

export const devIcons = [
  { icon: "devicon devicon-devicon-plain", name: "All", background: "#ae4dbe" },
  {
    icon: "devicon devicon-javascript-plain",
    name: "JS",
    background: "#f7b832",
  },
  { icon: "devicon devicon-html5-plain", name: "HTML", background: "#f07240" },
  { icon: "devicon devicon-php-plain", name: "PHP", background: "#258afb" },
  { icon: "devicon devicon-ruby-plain", name: "Ruby", background: "#ed4c47" },
  {
    icon: "devicon devicon-python-plain",
    name: "Python",
    background: "#1e61b8",
  },
  { icon: "devicon devicon-java-plain", name: "Java", background: "#ed5973" },
  {
    icon: "devicon devicon-dot-net-plain",
    name: ".Net",
    background: "#7d3488",
  },
  { icon: "devicon devicon-scala-plain", name: "Scala", background: "#ed4851" },
  { icon: "devicon devicon-c-plain", name: "C", background: "#64d9a5" },
  {
    icon: "devicon devicon-android-plain",
    name: "Mobile",
    background: "#db4e87",
  },
];

export const BuildingIcon = ({ color, width, height }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" style={{ color, width, height }}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </SvgIcon>
  );
};

const useStyles = makeStyles(() => ({
  icon: {
    width: 24,
    height: 24,
  },
}));

export function RecruiterIcon(props) {
  const classes = useStyles();

  return (
    <SvgIcon viewBox="0 0 24 24" className={classes.icon} {...props}>
      <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
    </SvgIcon>
  );
}

export function DeveloperIcon(props) {
  const classes = useStyles();
  return (
    <SvgIcon viewBox="0 0 24 24" className={classes.icon} {...props}>
      <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" />
    </SvgIcon>
  );
}
export const ProgressIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  </SvgIcon>
);
export const BuildingsIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </SvgIcon>
);
export const NewIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </SvgIcon>
);
export const PeopleIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </SvgIcon>
);

export default DeveloperIcon;
