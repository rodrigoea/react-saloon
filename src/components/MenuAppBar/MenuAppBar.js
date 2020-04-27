import React from "react";
import { Link as RouterLink } from "react-router-dom";

/** Material UI */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/styles";

/** Styles */
import styles from "./MenuAppBar.styles";

function MenuAppBar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menu}>
            <IconButton variant="contained" component={RouterLink} to="/">
              <Home className={classes.icon} />
            </IconButton>
          </div>

          <div>
            <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(MenuAppBar);
