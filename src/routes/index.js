import React from "react";
import { Route, Switch } from "react-router-dom";

/** Pages */
import { Home, JobApplications } from "../pages";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/salon/:id/" component={JobApplications} />
    </Switch>
  );
};

export default routes;
