import React, { useEffect } from "react";
import { isNil, isEmpty } from "ramda";

/** Redux */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/** Material UI */
import { Typography, withStyles } from "@material-ui/core";

/** Services */
import { fetchJobApplicationsAPI } from "../../api/jobApplications";

/** Store */
import {
  getJobApplications,
  getJobApplicationsError,
  getJobApplicationsPending,
  removeApplicant as removeApplicantActionAction
} from "../../store/ducks/jobApplications";

import { getCurrentSalonData } from "../../store/ducks/salons";

/** Components */
import { ProgressBar, JobApplicationsList } from "../../components";

/** Styles */
import styles from "./JobApplication.styles";

function JobApplications({ classes, ...props }) {
  const {
    fetchJobApplications,
    salon,
    data,
    pending,
    error,
    removeApplicant
  } = props;
  const hasSalonData = !isNil(salon) && !isEmpty(salon);

  useEffect(() => {
    fetchJobApplications(props.match.params.id);
  }, [fetchJobApplications, props.match.params.id]);

  return (
    <>
      {pending && <ProgressBar />}
      {error && <Typography align="center">Error: {error.message}</Typography>}
      {!pending && !error && hasSalonData && (
        <JobApplicationsList
          salon={salon}
          data={data}
          actions={{ removeApplicant }}
        />
      )}
    </>
  );
}

const mapStateToProps = state => ({
  error: getJobApplicationsError(state),
  data: getJobApplications(state),
  salon: getCurrentSalonData(state),
  pending: getJobApplicationsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchJobApplications: fetchJobApplicationsAPI,
      removeApplicant: applicantId => removeApplicantActionAction(applicantId)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(JobApplications));
