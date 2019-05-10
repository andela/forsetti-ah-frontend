import React from 'react';
import { Button } from 'reactstrap';
import VerticalListItems from './common/VerticalListItems';
import NavBarItems from './common/NavBarItems';
import Backdrop from './common/Backdrop';

const SideDrawer = ({ show, closed }) => {
  const items = [
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
    <React.Fragment>
      <Backdrop open={show} />
      <div
        className='sidedrawer'
        style={{
          opacity: show ? '1' : '0',
          visibility: show ? 'visible' : 'hidden'
        }}
      >
        <div className='sidedrawer-nav'>
          <div className='sidedrawer-nav-close-icon'>
            <Button onClick={closed} className='sidedrawer-nav-close-button'>
              <i className='far fa-window-close' />
            </Button>
          </div>
          <div className='sidedrawer-nav-links'>
            <VerticalListItems items={items} className='sidedrawer-nav-links-list' />
            <NavBarItems menuItems={menuItems} className='sidedrawer-nav-menu-list' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
