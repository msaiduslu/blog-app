import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { hide } from "../features/notificationSlice";
import MuiAlert from "@mui/material/Alert";

const Notification = () => {
  const { status, visible, message } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

  const handleClose = () => {
    dispatch(hide());
  };

  if (!visible) return null;

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={visible}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
