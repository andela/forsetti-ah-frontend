import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-skeleton-loader';
import { showSideDrawerAction, hideSideDrawerAction, getAritlces } from '../actions';
import {
  HeaderComponent,
  Footer,
  SideDrawerComponent,
  LoginModalComponent,
  SignUpModalComponent,
  Articles
} from '../components';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1
    };
  }

  async componentDidMount() {
    const { getAllArticles } = this.props;
    const { pageCount } = this.state;
    await getAllArticles(pageCount);
  }

  pageCountHandler = () => {
    const { getAllArticles } = this.props;
    this.setState(prevState => ({
      pageCount: prevState.pageCount + 1
    }), async () => {
      const { pageCount } = this.state;
      await getAllArticles(pageCount);
    });
  }

  render() {
    const {
      articles,
      showSideDrawer: { showSideDrawer },
      modal: { showModal, displayModal }
    } = this.props;

    return (
      <div className='landing-page'>
        <div className='container landing'>
          <div className='row my-5'>
            <div className='col-md-12' />
          </div>
          <div className='row'>
            <div className='col-md-8'>
              {
                articles.isLoading ? (
                  <div className='row'>
                    <div className='col-md-12'>
                      <Skeleton width='100px' height='10px' />
                    </div>
                    <div className='col-md-12'>
                      <Skeleton width='100%' height='100px' count={1} />
                    </div>
                  </div>
                ) : (
                  <Row className=''>
                    <div className='col-md-12'>
                      {
                        articles.articles && (
                        <Articles
                          articles={articles.articles}
                          loadMore={this.pageCountHandler}
                        />
                        )
                      }
                    </div>
                  </Row>
                )
              }
            </div>
            <div className='col-md-4' />
          </div>
        </div>
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
  const { articles } = state;
  const { showSideDrawer, modal } = state;
  return { articles, showSideDrawer, modal };
};
const mapDispatchToProps = dispatch => ({
  getAllArticles: (page) => {
    dispatch(getAritlces(page));
  },
});

const LandingPageComponent = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export { LandingPageComponent, LandingPage };
