import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import HorizontalListItems from './HorizontalListItems';
import {
  openModalAction,
  openTagsModal,
  openSignupModalAction
} from '../../actions';
import NavBarItems from './NavBarItems';


const Header = ({ clicked, dispatch, history }) => {
  const openLoginModal = () => dispatch(openModalAction());
  const openSignupModal = () => dispatch(openSignupModalAction());
  const openArticleTagsModal = () => dispatch(openTagsModal());
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
    if (history.location.pathname === '/article/new') {
      return menuItems.push({ no: 1, text: 'Publish', onClick: openArticleTagsModal });
    }

    if (token) {
      return menuItems.push({ no: 1, text: 'Write Post', onClick: () => history.push('/article/new') });
    }
    return (
      menuItems.push(
        { no: 1, text: 'Sign in', onClick: openLoginModal },
        { no: 2, text: 'Sign up', onClick: openSignupModal }
      )
    );
  };
  isLoggedIn();

  return (
    <nav className='header d-flex justify-content-between'>
      <div className='header-logo'>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <h1 className='header-logo-text'>Authors Haven</h1>
        </Link>
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

const HeaderComponent = connect()(withRouter(Header));

export {
  HeaderComponent,
  Header,
};
