import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-skeleton-loader';
import { getAritlces } from '../actions';
import { Articles } from '../components';

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
      article
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
                article.isLoading ? (
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
                        article.articles && (
                        <Articles
                          articles={article.articles}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { article } = state;
  return { article };
};
const mapDispatchToProps = dispatch => ({
  getAllArticles: (page) => {
    dispatch(getAritlces(page));
  },
});

const LandingPageComponent = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export { LandingPageComponent, LandingPage };
