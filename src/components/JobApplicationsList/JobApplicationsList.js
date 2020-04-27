import React from "react";

/** Material UI */
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, CardContent, Card, Fade } from "@material-ui/core";

import { PinDropRounded } from "@material-ui/icons";

/** Styles */
import styles from "./JobApplicationsList.style";

/** Components */
import { Container } from "../";
import JobApplicationsItems from "./JobApplicationsItems";

const JobApplicationsList = ({ salon, data, classes, actions, ...props }) => {
  return (
    <Container>
      <Typography align="center" variant="h3" className={classes.adminName}>
        {salon.location_admin_name}
      </Typography>

      <Typography
        align="center"
        variant="h2"
        className={classes.actionRequired}
      >
        Action Required!
      </Typography>

      <Typography align="center" variant="body1" gutterBottom>
        Please indicate who you will approve.
      </Typography>

      <Fade in timeout={500}>
        <Grid container justify="center" className={classes.list}>
          <Grid item xs={12} md={6} lg={5}>
            <JobApplicationsItems actions={actions} data={data} />
          </Grid>
        </Grid>
      </Fade>

      <Fade in timeout={700}>
        <Grid container justify="center" className={classes.list}>
          <Grid item xs={12} md={6} lg={5}>
            <Card>
              <CardContent>
                <Grid container direction="row">
                  <div style={{ flexGrow: 1 }}>
                    <Grid container direction="row" spacing={2}>
                      <Grid item>
                        <PinDropRounded className={classes.pin} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          {salon.address_1} | {salon.address_2}
                        </Typography>
                        <Typography variant="body2">
                          {salon.city}, {salon.state}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default withStyles(styles)(JobApplicationsList);
