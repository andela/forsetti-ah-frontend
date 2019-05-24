import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { AuthorizationHOCUnit } from '../AuthorizationHOC';
import { SideDrawerComponent } from '../SideDrawer';
import { HeaderComponent } from './Header';
import Footer from './Footer';
import LoginModal from '../LoginModal';
import { LandingPageComponent } from '../../containers/LandingPage';
import CreateArticlePage from '../../containers/CreateArticle';
import NotFoundPage from '../../containers/NotFoundPage';
import Article from '../../containers/Article';
import { showSideDrawerAction, hideSideDrawerAction } from '../../actions';
import { AuthSocialComponent } from '../AuthSocial';
import SignUpDefault from '../SignUpForm';
import NotificationPage from '../../containers/NotificationPage';


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
        <AuthorizationHOCUnit exact path='/article/new' component={CreateArticlePage} />
        <Route exact path='/article/:slug' component={Article} />
        <Route path='/auth/social' component={AuthSocialComponent} />
        <AuthorizationHOCUnit exact path='/profiles/notification' component={NotificationPage} />
        <Route path='/signup' component={SignUpDefault} />
        <Route component={NotFoundPage} />
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
