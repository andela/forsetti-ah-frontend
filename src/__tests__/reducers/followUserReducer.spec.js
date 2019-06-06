import { followUserReducer } from '../../reducers/followUserReducer';
import { followUserActionTypes } from '../../action-types/follow.action-type';

const { FOLLOW_USER_BEGIN, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE } = followUserActionTypes;

const initialState = {
  isLoading: false,
  status: '',
  message: '',
};

describe('follow user Reducer', () => {
  it('should return initial state', () => {
    expect(followUserReducer(undefined, { type: '@@INIT'})).toEqual(initialState);
  });

  it('should return FOLLOW_USER_BEGIN state when loading', () => {
    expect(followUserReducer(undefined, {
      type: FOLLOW_USER_BEGIN
    })).toEqual({
      isLoading: true
    });
  });

  it('should return FOLLOW_USER_SUCCESS state when successful', () => {
    const payload = {
      message: 'Success',
      status: 201
    };
    expect(followUserReducer(undefined, {
      type: FOLLOW_USER_SUCCESS,
      payload
    })).toEqual({
      isLoading: false,
      status: 201,
      message: 'Success'
    });
  });

  it('should return FOLLOW_USER_FAILURE state when loading', () => {
    const payload = {
      message: 'Failure',
      status: 400
    };
    expect(followUserReducer(undefined, {
      type: FOLLOW_USER_FAILURE,
      payload
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure'
    });
  });
});
