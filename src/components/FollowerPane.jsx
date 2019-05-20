import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import { TabPane } from 'reactstrap';
import UserCard from './common/UserCard';
import { followUser, unFollowUser, getFollowers } from '../actions';

class FollowerPane extends Component {
  async componentDidMount() {
    const { getFollowersRequest } = this.props;
    await getFollowersRequest();
  }

  handleUnfollow = async (username) => {
    const { unfollow, getFollowersRequest } = this.props;
    await unfollow(username);
    await getFollowersRequest();
  };

  handleFollow = async (username) => {
    const { follow, getFollowersRequest } = this.props;
    await follow(username);
    await getFollowersRequest();
  };

  render() {
    const {
      isLoadingFollowers, followers
    } = this.props;
    let followersContent = null;
    if (isLoadingFollowers) {
      followersContent = (
        <Skeleton
          count={4}
          width='100%'
          height='6rem'
          widthRandomness={0}
          borderRadius={0}
        />
      );
    } else if (followers.length > 0) {
      followersContent = followers.map(follower => (
        <UserCard
          key={follower.id}
          image={follower.image}
          name={`${follower.firstname} ${follower.lastname}`}
          type={follower.followsBack ? 'following' : 'follow'}
          username={`@${follower.username}`}
          bio={follower.bio}
          action={follower.followsBack
            ? () => this.handleUnfollow(follower.username) : () => this.handleFollow(follower.username)}
        />
      ));
    } else {
      followersContent = <p className='text-center'>You currently have no followers</p>;
    }
    return (
      <TabPane tabId='1'>
        {followersContent}
      </TabPane>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingFollowers: state.getFollowers.isLoading,
  followers: state.getFollowers.data
});

const mapDispatchToProps = dispatch => ({
  follow: username => dispatch(followUser(username)),
  unfollow: username => dispatch(unFollowUser(username)),
  getFollowersRequest: () => dispatch(getFollowers())
});

const FollowerPaneComponent = connect(mapStateToProps, mapDispatchToProps)(FollowerPane);

export { FollowerPane, FollowerPaneComponent };
