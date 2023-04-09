import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { usePopupContext } from "../Context/usePopupContext";
const MessagePopup = () => {
  const { setPopup, popup } = usePopupContext();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopup((prev) => ({ ...prev, open: false }));
  };
  return (
    <Snackbar open={popup.open} onClose={handleClose} autoHideDuration={2000}>
      <Alert onClose={handleClose} severity={popup.severity}>
        {popup.message}
      </Alert>
    </Snackbar>
  );
};

export default MessagePopup;
