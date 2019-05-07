import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { showSideDrawerAction, hideSideDrawerAction } from '../actions';
import {
  HeaderComponent,
  Footer,
  SideDrawerComponent,
  LoginModalComponent,
  SignUpModalComponent
} from '../components';

class LandingPage extends Component {
  showSideDrawerHandler = () => {
    const { dispatch } = this.props;
    dispatch(showSideDrawerAction());
  }

  hideSideDrawerHandler = () => {
    const { dispatch } = this.props;
    dispatch(hideSideDrawerAction());
  }

  render() {
    const {
      showSideDrawer: { showSideDrawer },
      modal: { showModal, displayModal }
    } = this.props;
    console.log(this.props);
    return (
      <div className='landing-page'>
        <LoginModalComponent isOpen={showModal} />
        <SignUpModalComponent isOpen={displayModal} />
        <SideDrawerComponent show={showSideDrawer} closed={this.hideSideDrawerHandler} />
        <Row>
          <Col lg={{ size: 12 }}>
            <HeaderComponent clicked={this.showSideDrawerHandler} />
          </Col>
        </Row>
        <Row className='articles'>
          <Col sm={{ size: 6 }} />
          <Col sm={{ size: 4 }} />
        </Row>
        <Row className='footer'>
          <Col>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { showSideDrawer, modal } = state;
  return { showSideDrawer, modal };
};

const LandingPageComponent = connect(mapStateToProps)(LandingPage);

export { LandingPageComponent, LandingPage };
