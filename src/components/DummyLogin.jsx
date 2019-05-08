import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DummyLogin = () => (
  <Fragment>
    <h1>Dummy Login Page</h1>
    <p>This is a dummy login page with no styling!.</p>
    <h4>
      Click
      <Link
        to='/'
      >
        here
      </Link>
      to go to home page
    </h4>
  </Fragment>
);

export default DummyLogin;
