import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import NotFound from '../components/NotFound';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
