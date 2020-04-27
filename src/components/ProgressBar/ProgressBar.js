import React from "react";

/** Material UI */
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core";

/** Styles */
import styles from "./ProgressBar.styles";

function ProgressBar({ classes }) {
  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

export default withStyles(styles)(ProgressBar);
