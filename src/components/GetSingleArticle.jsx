import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSingleArticle } from '../actions/articleActions';
import Comments from './Comments';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import Notfound from './NotFound';

export class GetSingleArticle extends Component {
  async componentDidMount() {
    const {
      getOneArticle,
      match: {
        params: {
          slug
        }
      },
      article: {
        title
      }
    } = this.props;
    document.title = title || 'Home to the creative | Authors Haven';
    await getOneArticle(slug);
  }

  render() {
    const {
      article: {
        success
      }
    } = this.props;
    if (!success) {
      return (
        <Notfound text='article' />
      );
    }
    const {
      article: {
        author: {
          image,
          username
        },
        body,
        claps,
        readingTime,
        title,
        image: articleImage,
        createdAt
      }
    } = this.props;

    const headerProps = {
      title,
      image,
      username,
      readingTime,
      articleImage,
      createdAt
    };
    const bodyProps = {
      body, claps
    };
    return (
      <Fragment>
        <ArticleHeader {...headerProps} />
        <div className='container'>
          <ArticleBody {...bodyProps} />
          <Comments />
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.article,
});

export const mapDispatchToProps = {
  getOneArticle: getSingleArticle
};
export const SingleArticle = connect(mapStateToProps, mapDispatchToProps)(withRouter(GetSingleArticle));
