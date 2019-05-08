import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfileComponent from '../components/UserProfile';
import DummyLogin from '../components/DummyLogin';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path='/' component={UserProfileComponent} />
        <Route path='/login' component={DummyLogin} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
