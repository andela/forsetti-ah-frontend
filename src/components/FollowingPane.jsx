import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import { TabPane } from 'reactstrap';
import UserCard from './common/UserCard';
import { unFollowUser, getFollowings } from '../actions';

class FollowingPane extends Component {
  async componentDidMount() {
    const { getFollowingsRequest } = this.props;
    await getFollowingsRequest();
  }

  handleUnfollow = async (username) => {
    const { unfollow, getFollowingsRequest } = this.props;
    await unfollow(username);
    await getFollowingsRequest();
  };

  render() {
    const { followings, isLoadingFollowings } = this.props;
    let followingContent = null;
    if (isLoadingFollowings) {
      followingContent = (
        <Skeleton
          count={4}
          width='100%'
          height='6rem'
          widthRandomness={0}
          borderRadius={0}
        />
      );
    } else if (followings.length > 0) {
      followingContent = followings.map(following => (
        <UserCard
          key={following.id}
          image={following.image}
          name={`${following.firstname} ${following.lastname}`}
          type='following'
          username={`@${following.username}`}
          bio={following.bio}
          action={() => this.handleUnfollow(following.username)}
        />
      ));
    } else {
      followingContent = <p className='text-center'>You currently follow no user</p>;
    }
    return (
      <TabPane tabId='2'>
        {followingContent}
      </TabPane>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingFollowings: state.getFollowings.isLoading,
  followings: state.getFollowings.data
});

const mapDispatchToProps = dispatch => ({
  unfollow: username => dispatch(unFollowUser(username)),
  getFollowingsRequest: () => dispatch(getFollowings())
});

const FollowingPaneComponent = connect(mapStateToProps, mapDispatchToProps)(FollowingPane);

export { FollowingPane, FollowingPaneComponent };
