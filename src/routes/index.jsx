import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPageComponent } from '../containers/LandingPage';
import NotFound from '../components/NotFound';
import Article from '../containers/Article';
import { SignUp } from '../components/SignUp';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route exact path='/article/:slug' component={Article} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
