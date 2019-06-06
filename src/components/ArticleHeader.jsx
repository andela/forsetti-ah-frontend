import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { articlePlaceholder, user } from '../assets';
import { followUser, unFollowUser } from '../actions';
import Button from './common/Button';

class ArticleHeader extends Component {
  async handleFollowUser(username) {
    const { followUserRequest } = this.props;
    await followUserRequest(username);
  }

  async handleUnFollowUser(username) {
    const { unFollowUserRequest } = this.props;
    await unFollowUserRequest(username);
  }

  render() {
    const {
      title,
      image,
      username,
      readingTime,
      articleImage,
      createdAt,
      status,
      followUserMessage,
      unfollowerStatus,
      unfollowUserMessage
    } = this.props;
    let button = (
      <p className=''>
        {username}
        <Button
          type='button'
          className='btn btn_primary btn-sm py-0 mx-2'
          onClick={() => this.handleFollowUser(username)}
        >
          {' '}
            Follow
          {' '}
        </Button>
      </p>
    );
    if (status || unfollowerStatus) {
      if (followUserMessage && followUserMessage === 'Successfully followed user') {
        button = (
          <p className=''>
            {username}
            <Button
              type='button'
              className='btn btn_primary btn-sm py-0 mx-2'
              onClick={() => this.handleUnFollowUser(username)}
            >
              {' '}
            Following
              {' '}
            </Button>
          </p>
        );
      } if (unfollowUserMessage && unfollowUserMessage === 'Successfully unfollowed user') {
        button = (
          <p className=''>
            {username}
            <Button
              type='button'
              className='btn btn_primary btn-sm py-0 mx-2'
              onClick={() => this.handleFollowUser(username)}
            >
              {' '}
            Follow
              {' '}
            </Button>
          </p>
        );
      }
    }

    return (
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-12 text-left'>
            <h2 className='text-uppercase article-title'>
              { title }
            </h2>
          </div>
        </div>
        <div className='row mt-3 mb-4'>
          <div className='col-3 col-md-1'>
            <img
              src={image !== null ? image : user}
              alt='profile'
              className='rounded-circle media m-0'
              style={{ objectFit: 'cover', width: '70px', height: '70px' }}
            />
          </div>
          <div className='col-8 col-md-11'>
            <div className='row ml-1'>
              <div className='col-md-12'>
                {button}
              </div>
              <div className='col-md-12'>
                <span>
                  {
                  moment(createdAt).format('DD MMM, YYYY')
                }
                ,
                  {
                    ` ${Math.ceil(readingTime / 1000.0)} min read`
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          {
          articleImage === null ? <div className='pt-3' />
            : (
              <div className='col-md-12'>
                <img
                  src={articleImage !== null ? articleImage : articlePlaceholder}
                  alt='articleimage'
                  className='col-12 col-md-11 article-image'
                />
              </div>
            )
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.followUser.status,
  followUserMessage: state.followUser.message,
  unfollowerStatus: state.unFollowUser.status,
  unfollowUserMessage: state.unFollowUser.message
});

const mapDispatchToProps = dispatch => ({
  followUserRequest: username => dispatch(followUser(username)),
  unFollowUserRequest: username => dispatch(unFollowUser(username))
});

const ArticleHeaderComponent = connect(mapStateToProps, mapDispatchToProps)(ArticleHeader);

export { ArticleHeader, ArticleHeaderComponent };
