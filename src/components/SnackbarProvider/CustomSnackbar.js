import React from "react";

/** Material UI */
import MuiSnackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";

/** Styles */
import styles, { variantColors, variantIcon } from "./CustomSnackbar.style";

const CustomSnackBar = ({ classes, open, onClose, message, type }) => {
  const Icon = variantIcon[type];
  const snackbarBgColor = variantColors[type];

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={open}
      autoHideDuration={4000}
      onClose={() => onClose(false)}
    >
      <SnackbarContent
        style={snackbarBgColor}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classes.icon} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => onClose(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </MuiSnackbar>
  );
};

export default withStyles(styles)(CustomSnackBar);
