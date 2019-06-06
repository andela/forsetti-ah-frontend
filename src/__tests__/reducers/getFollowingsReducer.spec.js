import { getFollowingsReducer } from '../../reducers/getFollowingsReducer';
import { getFollowingActionTypes } from '../../action-types/follow.action-type';

const { GET_FOLLOWINGS_BEGIN, GET_FOLLOWINGS_SUCCESS, GET_FOLLOWINGS_FAILURE } = getFollowingActionTypes;

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

describe('get followings Reducer', () => {
  it('should return initial state', () => {
    expect(getFollowingsReducer(undefined, { type: '@@INIT'})).toEqual(initialState);
  });

  it('should return GET_FOLLOWINGS_BEGIN state when loading', () => {
    expect(getFollowingsReducer(undefined, {
      type: GET_FOLLOWINGS_BEGIN
    })).toEqual({
      isLoading: true
    });
  });

  it('should return GET_FOLLOWINGS_SUCCESS state when successful', () => {
    const payload = {
      message: 'Success',
      status: 200,
      data: {
        following: []
      }
    };
    expect(getFollowingsReducer(undefined, {
      type: GET_FOLLOWINGS_SUCCESS,
      payload
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Success',
      data: []
    });
  });

  it('should return GET_FOLLOWINGS_FAILURE state when loading', () => {
    const payload = {
      message: 'Failure',
      status: 400
    };
    expect(getFollowingsReducer(undefined, {
      type: GET_FOLLOWINGS_FAILURE,
      payload
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure'
    });
  });
});
