import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteModal({
  deleteOpen,
  setDeleteOpen,
  handleDelete,
}) {
  const handleClose = () => {
    handleDelete();
    setDeleteOpen(!deleteOpen);
  };

  return (
    <div>
      <Dialog
        open={deleteOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setDeleteOpen(!deleteOpen)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>You are deleting a post. Are you sure ?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(!deleteOpen)}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
