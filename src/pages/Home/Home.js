import React, { useEffect } from "react";

/** Redux */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/** Material UI */
import { withStyles } from "@material-ui/styles";

/** Components */
import { ProgressBar, SalonsList } from "../../components";

/** Services */
import { fetchSalonsAPI } from "../../api/salons";

/** Store */
import {
  getSalons,
  getSalonsError,
  getSalonsPending
} from "../../store/ducks/salons";

/** Styles */
import styles from "./Home.styles";
import { Typography } from "@material-ui/core";

function Home({ classes, ...props }) {
  const { fetchSalons, salons, pending, error } = props;

  useEffect(() => {
    if (!salons.length) {
      fetchSalons();
    }
  }, [fetchSalons, salons.length]);

  return (
    <>
      {pending && <ProgressBar />}
      {error && <Typography align="center">Error: {error.message}</Typography>}
      {!pending && !error && <SalonsList salons={salons} />}
    </>
  );
}

const mapStateToProps = state => ({
  error: getSalonsError(state),
  salons: getSalons(state),
  pending: getSalonsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSalons: fetchSalonsAPI
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
