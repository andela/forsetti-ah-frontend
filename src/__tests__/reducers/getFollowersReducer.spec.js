import { getFollowersReducer } from '../../reducers/getFollowersReducer';
import { getFollowerActionTypes } from '../../action-types/follow.action-type';

const { GET_FOLLOWERS_BEGIN, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE } = getFollowerActionTypes;

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

describe('get followers Reducer', () => {
  it('should return initial state', () => {
    expect(getFollowersReducer(undefined, { type: '@@INIT'})).toEqual(initialState);
  });

  it('should return GET_FOLLOWERS_BEGIN state when loading', () => {
    expect(getFollowersReducer(undefined, {
      type: GET_FOLLOWERS_BEGIN
    })).toEqual({
      isLoading: true
    });
  });

  it('should return GET_FOLLOWERS_SUCCESS state when successful', () => {
    const payload = {
      message: 'Success',
      status: 200,
      data: {
        followers: []
      }
    };
    expect(getFollowersReducer(undefined, {
      type: GET_FOLLOWERS_SUCCESS,
      payload
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Success',
      data: []
    });
  });

  it('should return FOLLOW_USER_FAILURE state when loading', () => {
    const payload = {
      message: 'Failure',
      status: 400
    };
    expect(getFollowersReducer(undefined, {
      type: GET_FOLLOWERS_FAILURE,
      payload
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure'
    });
  });
});
