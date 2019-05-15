import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='not-found'>
    <div className='notfound-bg' />
    <div className='notfound'>
      <div className='notfound-404'>
        <h1>404</h1>
      </div>
      <div className='notfound-404'>
        <h2>
          The page you are searching for does not exist.
          <br />
          You may need to consider going back to our
          {' '}
          <a
            href='/'
          >
            Home Page
          </a>
        </h2>
      </div>
    </div>
  </div>
);

export default NotFound;
