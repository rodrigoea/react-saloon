import React, { useState } from "react";

/** Material UI */
import Avatar from "@material-ui/core/Avatar";
import {
  IconButton,
  Card,
  CardContent,
  Grid,
  Typography,
  Fade
} from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

/** styles */
import styles from "./JobApplicationsList.style";

/** Components */
import JobApplicationDialog from "./JobApplicationDialog";

/** Providers */
import { useSnackbarContext } from "../SnackbarProvider";

function JobApplicationsItems({ data, actions, classes }) {
  const { showSnackbar } = useSnackbarContext();
  const [modalData, setModalData] = useState({
    open: false,
    applicantId: null
  });

  const handleAccept = applicantId => {
    actions.removeApplicant(applicantId);
    showSnackbar("Successfuly accepted!", "success");
  };

  const handleConfirmDialog = applicantId => {
    setModalData({
      open: true,
      applicantId
    });
  };

  const renderList = () => {
    return (
      <Card>
        {data.applicants.map(applicant => (
          <CardContent key={applicant.id}>
            <Grid container direction="row" justify="space-between">
              <Grid item xs={8}>
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <Avatar
                      className={classes.applicant}
                      src={applicant.image_url}
                    />
                  </Grid>
                  <Grid item xs={8} lg={9}>
                    <Typography variant="body1">
                      {applicant.full_name}
                    </Typography>
                    <Typography variant="body2">
                      {applicant.business_name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.approve}
                  onClick={() => handleAccept(applicant.id)}
                >
                  <Check />
                </IconButton>
                <IconButton
                  className={classes.reject}
                  onClick={() => handleConfirmDialog(applicant.id)}
                >
                  <Close />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        ))}

        <JobApplicationDialog
          actions={actions}
          modalData={modalData}
          setModalData={setModalData}
        />
      </Card>
    );
  };

  return (
    <>
      {!!data.applicants.length && renderList()}
      {!data.applicants.length && (
        <Fade in>
          <Typography variant="h4" align="center">
            Done!
          </Typography>
        </Fade>
      )}
    </>
  );
}

export default withStyles(styles)(JobApplicationsItems);
