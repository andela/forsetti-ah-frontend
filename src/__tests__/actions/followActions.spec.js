import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  toggleFollowerModal,
  handleGetFollowersBegin,
  handleGetFollowersSuccess,
  handleGetFollowersFailure,
  handleGetFollowingsBegin,
  handleGetFollowingsSuccess,
  handleGetFollowingsFailure,
  handleFollowUserBegin,
  handleFollowUserSuccess,
  handleFollowUserFailure,
  handleUnFollowUserBegin,
  handleUnFollowUserSuccess,
  handleUnFollowUserFailure
} from '../../actions';
import {
  OPEN_FOLLOWER_MODAL,
  CLOSE_FOLLOWER_MODAL,
  FOLLOW_USER_BEGIN,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_BEGIN,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  GET_FOLLOWERS_BEGIN,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_BEGIN,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE
} from '../../action-types';

describe('Get followers actions', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    test('should setup loading state action object', () => {
        expect(toggleFollowerModal('open')).toEqual({
            type: OPEN_FOLLOWER_MODAL
        });
        expect(toggleFollowerModal('close')).toEqual({
          type: CLOSE_FOLLOWER_MODAL
      });
    });

    test('should return loading state for get followers', () => {
      expect(handleGetFollowersBegin()).toEqual({
          type: GET_FOLLOWERS_BEGIN
      });
    });

    test('should return success action for get followers', () => {
      const payload = {};
      expect(handleGetFollowersSuccess()).toEqual({
          type: GET_FOLLOWERS_SUCCESS,
          payload
      });
    });
    
    test('should return failure action for get followers', () => {
      const payload = {};
      expect(handleGetFollowersFailure()).toEqual({
          type: GET_FOLLOWERS_FAILURE,
          payload
      });
    });
    test('should return loading state for get followings', () => {
      expect(handleGetFollowingsBegin()).toEqual({
          type: GET_FOLLOWINGS_BEGIN
      });
    });

    test('should return success action for get followings', () => {
      const payload = {};
      expect(handleGetFollowingsSuccess()).toEqual({
          type: GET_FOLLOWINGS_SUCCESS,
          payload
      });
    });
    
    test('should return failure action for get followeings', () => {
      const payload = {};
      expect(handleGetFollowingsFailure()).toEqual({
          type: GET_FOLLOWINGS_FAILURE,
          payload
      });
    });
    test('should return loading state for follow user', () => {
      expect(handleFollowUserBegin()).toEqual({
          type: FOLLOW_USER_BEGIN
      });
    });

    test('should return success action for follow user', () => {
      const payload = {};
      expect(handleFollowUserSuccess()).toEqual({
          type: FOLLOW_USER_SUCCESS,
          payload
      });
    });
    
    test('should return failure action for follow user', () => {
      const payload = {};
      expect(handleFollowUserFailure()).toEqual({
          type: FOLLOW_USER_FAILURE,
          payload
      });
    });
    test('should return loading state for unfollow user', () => {
      expect(handleUnFollowUserBegin()).toEqual({
          type: UNFOLLOW_USER_BEGIN
      });
    });

    test('should return success action for unfollow user', () => {
      const payload = {};
      expect(handleUnFollowUserSuccess()).toEqual({
          type: UNFOLLOW_USER_SUCCESS,
          payload
      });
    });
    
    test('should return failure action for unfollow user', () => {
      const payload = {};
      expect(handleUnFollowUserFailure()).toEqual({
          type: UNFOLLOW_USER_FAILURE,
          payload
      });
    });
});
