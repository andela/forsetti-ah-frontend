import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import HorizontalListItems from './HorizontalListItems';
import { openModalAction } from '../../actions';
import NavBarItems from './NavBarItems';


const Header = ({ clicked, dispatch }) => {
  const openLoginModal = () => dispatch(openModalAction());
  const linkItems = [
    { no: 1, name: 'Tech' },
    { no: 2, name: 'Philosophy' },
    { no: 3, name: 'Life' },
    { no: 4, name: 'Politics' },
    { no: 5, name: 'Nature' },
    { no: 6, name: 'Music' }
  ];

  const menuItems = [];

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');

    if (token) {
      return menuItems.push({ no: 1, text: 'Write Post' });
    }
    return menuItems.push({ no: 1, text: 'Sign in', onClick: openLoginModal }, { no: 2, text: 'Sign up' });
  };

  isLoggedIn();

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

const HeaderComponent = connect()(Header);

export {
  HeaderComponent,
  Header,
};
