import React from "react";

/** Material UI */
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

/** Styles */
import styles from "./SalonsList.style";

/** Components */
import { Container, SalonCard } from "../";

const SalonsList = ({ salons, classes }) => {
  const renderSalons = () => {
    return salons.map((salon, i) => {
      return (
        <Grow key={salon.api_identifier} in timeout={i * 500}>
          <Grid item xs={12} md={6} lg={4}>
            <SalonCard data={salon} />
          </Grid>
        </Grow>
      );
    });
  };

  return (
    <Container>
      <Typography variant="overline" gutterBottom>
        My salons
      </Typography>

      <Divider color="secondary" className={classes.divider} />

      <Grid container spacing={4}>
        {renderSalons()}
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(SalonsList);
