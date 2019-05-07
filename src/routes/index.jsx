import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPageComponent } from '../containers/LandingPage';
import SignUpDefault from '../containers/SignUp';
import NotFound from '../containers/NotFoundPage';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route path='/signup' component={props => <SignUpDefault />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
