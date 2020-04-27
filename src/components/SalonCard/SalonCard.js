import React from "react";
import { Link as RouterLink } from "react-router-dom";

/** Material UI */
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

/** Styles */
import styles from "./SalonCard.styles";
import { Fab } from "@material-ui/core";

function SalonCard({ classes, api_identifier, data }) {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={data.photo} />
      <CardContent>
        <Typography className={classes.title} variant="h2" gutterBottom>
          {data.location_name}
        </Typography>
        <Typography variant="subtitle1" component="h2" color="textSecondary">
          {data.address_1} | {data.address_2}
        </Typography>
        <Typography variant="subtitle2" component="h2" color="textSecondary">
          {data.city}, {data.state}
        </Typography>
      </CardContent>

      <Fab
        className={classes.cogButton}
        to={`/salon/${data.api_identifier}`}
        component={RouterLink}
      >
        <Settings color="primary" />
      </Fab>
    </Card>
  );
}
export default withStyles(styles)(SalonCard);
