import React from "react";

/** Material UI */
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

/** Providers */
import { useSnackbarContext } from "../SnackbarProvider";

function JobApplicationDialog({ actions, modalData, setModalData }) {
  const { showSnackbar } = useSnackbarContext();
  const { open, applicantId } = modalData;

  const handleClose = () => {
    setModalData({
      open: false,
      applicantId: null
    });
  };

  const handleRemove = () => {
    actions.removeApplicant(applicantId);
    showSnackbar("Successfuly declined!", "success");
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Decline Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to decline this person?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          NO
        </Button>
        <Button onClick={() => handleRemove()} color="primary" autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default JobApplicationDialog;
