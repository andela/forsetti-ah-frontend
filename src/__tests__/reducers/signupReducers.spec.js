import { authReducer, initialState } from '../../reducers/authReducer';
import { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../action-types';

const user = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'Johnny4444',
  email: 'john@doe.com',
  password: 'johnny3334'
};

const error = {};

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should handle SIGNUP_BEGIN', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_BEGIN
    })).toEqual({
      ...initialState,
      submit: true,
      isloading: true
    });
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_SUCCESS,
      payload: { user }
    })).toEqual({
      ...initialState,
      redirect: true,
      user,
      isloading: false
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_FAILURE,
      payload: { error }
    })).toEqual({
      ...initialState,
      redirect: false,
      submit: false,
      errors: {},
      isloading: false
    });
  });
});
