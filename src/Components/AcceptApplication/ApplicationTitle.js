import RatingModal from "./RatingModal";
import DecistionModal from "./DecistionModal";
import ApplicantSummary from "./ApplicantSummary";

export const ApplicationTitle = () => {
  return (
    <>
      <ApplicantSummary />
      <RatingModal />
      <DecistionModal />
    </>
  );
};
