import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSingleArticle } from '../actions/articleActions';
import Comments from './Comments';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import Notfound from './NotFound';
import { bookmarkArticle } from '../actions';

export class GetSingleArticle extends Component {
  componentDidMount() {
    this.getSingle();
  }

  getSingle = () => {
    const {
      getOneArticle,
      match: {
        params: {
          slug
        }
      },
      article: {
        title
      },
      token
    } = this.props;
    document.title = title || 'Home to the creative | Authors Haven';
    getOneArticle(slug, token);
  }

  bookmark = () => {
    const {
      createBookmark,
      article: {
        id
      }
    } = this.props;
    createBookmark(id);
    this.getSingle();
  }

  render() {
    const {
      article: {
        success
      },
    } = this.props;
    if (!success) {
      return (
        <Notfound text='article' />
      );
    }
    const {
      status,
      article: {
        author: {
          image = '',
          username
        },
        body,
        claps,
        readingTime,
        title,
        image: articleImage,
        createdAt,
        id,
        Bookmarked
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
      body,
      claps,
      id,
      bookmark: this.bookmark,
      status,
      Bookmarked
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
  token: state.auth.token
});

export const mapDispatchToProps = {
  getOneArticle: getSingleArticle,
  createBookmark: bookmarkArticle
};
export const SingleArticle = connect(mapStateToProps, mapDispatchToProps)(withRouter(GetSingleArticle));
