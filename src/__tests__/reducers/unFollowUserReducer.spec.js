import { unFollowUserReducer } from '../../reducers/unfollowUserReducer';
import { unFollowUserActionTypes } from '../../action-types/follow.action-type';

const { UNFOLLOW_USER_BEGIN, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE } = unFollowUserActionTypes;

const initialState = {
  isLoading: false,
  status: '',
  message: '',
};

describe('unfollow user Reducer', () => {
  it('should return initial state', () => {
    expect(unFollowUserReducer(undefined, { type: '@@INIT'})).toEqual(initialState);
  });

  it('should return UNFOLLOW_USER_BEGIN state when loading', () => {
    expect(unFollowUserReducer(undefined, {
      type: UNFOLLOW_USER_BEGIN
    })).toEqual({
      isLoading: true
    });
  });

  it('should return UNFOLLOW_USER_SUCCESS state when successful', () => {
    const payload = {
      message: 'Success',
      status: 200
    };
    expect(unFollowUserReducer(undefined, {
      type: UNFOLLOW_USER_SUCCESS,
      payload
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Success'
    });
  });

  it('should return UNFOLLOW_USER_FAILURE state when failure occurs', () => {
    const payload = {
      message: 'Failure',
      status: 400
    };
    expect(unFollowUserReducer(undefined, {
      type: UNFOLLOW_USER_FAILURE,
      payload
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure'
    });
  });
});
