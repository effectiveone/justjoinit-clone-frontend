import { makeStyles } from "@material-ui/core";
import RatingModal from "./RatingModal";
import { DecistionModal } from "./DecistionModal";
import ApplicantSummary from "./ApplicantSummary";

const useStyles = makeStyles(() => ({
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const ApplicationTitle = () => {
  const classes = useStyles();

  return (
    <>
      <ApplicantSummary />
      <RatingModal />
      <DecistionModal />
    </>
  );
};
