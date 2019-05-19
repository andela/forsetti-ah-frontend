import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { SideDrawerComponent } from '../SideDrawer';
import { HeaderComponent } from './Header';
import Footer from './Footer';
import LoginModal from '../LoginModal';
import { LandingPageComponent } from '../../containers/LandingPage';
import NotFound from '../NotFound';
import Article from '../../containers/Article';
import { showSideDrawerAction, hideSideDrawerAction } from '../../actions';
import { AuthSocialComponent } from '../AuthSocial';

const BaseLayoutComponent = ({ showSideDrawer, modal, dispatch }) => {
  const showSideDrawerHandler = () => {
    dispatch(showSideDrawerAction());
  };

  const hideSideDrawerHandler = () => {
    dispatch(hideSideDrawerAction());
  };
  const { showSideDrawer: showSideDraw } = showSideDrawer;
  const { showModal } = modal;
  return (
    <Router>
      <SideDrawerComponent show={showSideDraw} closed={hideSideDrawerHandler} />
      <LoginModal isOpen={showModal} />
      <HeaderComponent clicked={showSideDrawerHandler} />
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <Route exact path='/article/:slug' component={Article} />
        <Route path='/auth/social' component={AuthSocialComponent} />
        <Route component={NotFound} />
      </Switch>
      <div className='footer'>
        <Row>
          <Col md={{ size: 12 }}>
            <Footer />
          </Col>
        </Row>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  const { showSideDrawer, modal } = state;
  return { showSideDrawer, modal };
};

const BaseLayout = connect(mapStateToProps)(BaseLayoutComponent);

export {
  BaseLayout,
  BaseLayoutComponent
};
