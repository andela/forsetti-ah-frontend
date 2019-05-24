import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPageComponent } from '../containers/LandingPage';
import NotificationPage from '../containers/NotificationPage';
import NotFound from '../components/NotFound';
import Article from '../containers/Article';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route path='/user' component={() => <h1>Hello</h1>} />
        <Route exact path='/article/:slug' component={Article} />
        <Route path='/profiles/notification' component={NotificationPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
