import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import HorizontalListItems from './HorizontalListItems';
import NavBarItems from './NavBarItems';

const Header = ({ clicked }) => {
  const linkItems = [
    { no: 1, name: 'Tech' },
    { no: 2, name: 'Philosophy' },
    { no: 3, name: 'Life' },
    { no: 4, name: 'Politics' },
    { no: 5, name: 'Nature' },
    { no: 6, name: 'Music' }
  ];

  const menuItems = [
    { no: 1, text: 'Sign in' },
    { no: 2, text: 'Sign up' }
  ];

  return (
    <nav className='header d-flex justify-content-between'>
      <div className='header-logo'>
        <h1 className='header-logo-text'>Authors Haven</h1>
      </div>
      <div className='header-links'>
        <HorizontalListItems items={linkItems} className='header-links-list' />
      </div>
      <div className='header-nav'>
        <NavBarItems menuItems={menuItems} className='header-nav-menu' />
        <Button onClick={clicked} className='header-nav-hamburger'>
          <i className='fas fa-bars' />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
