import { SvgIcon } from "@material-ui/core";
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

export const BuildingIcon = ({ color }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" style={{ color }}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </SvgIcon>
  );
};
