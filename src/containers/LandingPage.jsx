import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { showSideDrawerAction, hideSideDrawerAction } from '../actions';
import { Header, Footer, SideDrawer } from '../components';

export class LandingPage extends Component {
  showSideDrawerHandler = () => {
    const { dispatch } = this.props;
    dispatch(showSideDrawerAction());
  }

  hideSideDrawerHandler = () => {
    const { dispatch } = this.props;
    dispatch(hideSideDrawerAction());
  }

  render() {
    const { showSideDrawer: { showSideDrawer } } = this.props;
    return (
      <div className='landing-page'>
        <SideDrawer show={showSideDrawer} closed={this.hideSideDrawerHandler} />
        <Row>
          <Col lg={{ size: 12 }}>
            <Header clicked={this.showSideDrawerHandler} />
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
  const { showSideDrawer } = state;
  return { showSideDrawer };
};

export default connect(mapStateToProps)(LandingPage);
