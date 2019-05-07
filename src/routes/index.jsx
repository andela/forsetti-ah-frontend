import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPageComponent } from '../containers/LandingPage';
import SignUp from '../containers/SignUp';
import NotFound from '../containers/NotFoundPage';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
