import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSingleArticle } from '../actions/articleActions';
import Comments from './Comments';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import Notfound from './NotFound';
import { openEmailShareModal, openModalAction } from '../actions';
import { EmailShareModalComponent } from './EmailShareModal';

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

  openModal = () => {
    const { openEmailShareModalAction, openLoginModalAction } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return openLoginModalAction();
    }
    return openEmailShareModalAction();
  };

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
        createdAt,
        slug
      },
      emailShareModal: {
        showEmailShareModal
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
      body, claps, title, shareModal: this.openModal
    };
    return (
      <Fragment>
        <ArticleHeader {...headerProps} />
        <div className='container'>
          <ArticleBody {...bodyProps} />
          <Comments />
        </div>
        <EmailShareModalComponent
          isOpen={showEmailShareModal}
          slug={slug}
        />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.article,
  emailShareModal: state.emailShareModal
});

export const mapDispatchToProps = {
  getOneArticle: getSingleArticle,
  openEmailShareModalAction: openEmailShareModal,
  openLoginModalAction: openModalAction
};
export const SingleArticle = connect(mapStateToProps, mapDispatchToProps)(withRouter(GetSingleArticle));
