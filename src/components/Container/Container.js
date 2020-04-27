import React from "react";

/** Material UI */
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

/** Styles */
import styles from "./Container.style";

const Container = ({ classes, className, children }) => {
  return (
    <Grid container justify="center" className={`${className} ${classes.root}`}>
      <Grid item xs={11} md={10} lg={10} xl={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Container);
