import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-skeleton-loader';
import {
  getAritlces,
  getTopRatedArticles,
  openModalAction
} from '../actions';
import {
  Articles,
  SignUpModalComponent,
  HeaderComponent,
  Footer,
  SideDrawerComponent,
  LoginModalComponent,
  ArticleTopRated
} from '../components';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1
    };
  }

  componentDidMount() {
    const {
      getAllArticles,
      topRatedArticles,
      openModal,
      history: {
        action
      }
    } = this.props;
    const mql = window.matchMedia('min-width: 992px').matches;

    const { pageCount } = this.state;
    getAllArticles(pageCount);
    if (!mql) {
      topRatedArticles();
    }

    if (action === 'REPLACE') openModal();
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
      modal: { showModal, displayModal },
      topArticles: {
        topRated = []
      }
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
            <div className='col-md-4 mt-4 top'>
              <h4
                className='border border-top-0 border-left-0 border-right-0 border-dark pb-2'
              >
      Top Articles
              </h4>
              <div className='col-12 mt-2' style={{ height: '32rem', overflow: 'scroll' }}>
                {
        topRated.length !== 0 ? (
          topRated.map(top => (
            <ArticleTopRated
              key={top.id}
              title={top.title}
              description={top.description}
              readingTime={top.readingTime}
              image={top.author ? top.author.image : ''}
              firstname={top.author ? top.author.firstname : ''}
              username={top.author ? top.author.username : ''}
              slug={top.slug}
            />
          ))
        ) : (<p>No Top Articles</p>)

      }
              </div>
            </div>
          </div>
        </div>
        <SignUpModalComponent isOpen={displayModal} />
        <Row className='articles'>
          <Col sm={{ size: 6 }} />
          <Col sm={{ size: 4 }} />
        </Row>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const {
    showSideDrawer,
    modal,
    articles,
    topArticles
  } = state;
  return {
    articles,
    showSideDrawer,
    modal,
    topArticles
  };
};
const mapDispatchToProps = {
  getAllArticles: getAritlces,
  topRatedArticles: getTopRatedArticles,
  openModal: openModalAction
};

const LandingPageComponent = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export {
  LandingPage,
  LandingPageComponent
};
