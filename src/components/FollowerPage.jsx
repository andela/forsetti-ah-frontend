import React, { Component } from 'react';
import {
  TabContent,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { FollowerPaneComponent } from './FollowerPane';
import { FollowingPaneComponent } from './FollowingPane';

class FollowerPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className='container m-5 mx-auto'>
        <Nav tabs>
          <NavItem className='w-50'>
            <NavLink
              onClick={() => { this.toggle('1'); }}
              className={`text-center text-uppercase font-weight-bold ${activeTab === '1' ? 'tab-active-class' : ''}`}
            >
              Followers
            </NavLink>
          </NavItem>
          <NavItem className='w-50'>
            <NavLink
              onClick={() => { this.toggle('2'); }}
              className={`text-center text-uppercase font-weight-bold ${activeTab === '2' ? 'tab-active-class' : ''}`}
            >
              Followings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <FollowerPaneComponent />
          <FollowingPaneComponent />
        </TabContent>
      </div>
    );
  }
}

export default FollowerPage;
