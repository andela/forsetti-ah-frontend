import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DummyLogin from '../components/DummyLogin';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/login' component={DummyLogin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
