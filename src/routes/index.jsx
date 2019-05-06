import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPageComponent } from '../containers/LandingPage';
import NotFound from '../components/NotFound';
import AuthSocial from '../components/AuthSocial';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route path='/auth/social' component={AuthSocial} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
