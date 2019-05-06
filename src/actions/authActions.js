import { auth } from '../action-types';
import axios from '../config/axiosConfig';

const {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_BEGIN,
  GET_USER_DATA,
  GET_USER_DATA_FAIL
} = auth;

const error = 'You cannot be logged in';
/**
 * Show loading state
 */
export const loadingStateHandler = () => ({
  type: LOGIN_USER_BEGIN
});

/**
 * Handles successful api call to the login API
 * @param {object} response
 */
export const onLoginSuccessHandler = (response = {}, rememberLogin = false) => ({
  type: LOGIN_USER_SUCCESS,
  payload: response,
  rememberLogin
});

/**
 * Handles axios error with api call to the login API
 * @param {object} response
 */
export const onFailureHandler = response => ({
  type: LOGIN_USER_FAILURE,
  payload: response
});

/**
 * Handles get user data success
 * @param {object} user
 */
const getUserDataSuccess = (user = {}, token) => ({
  type: GET_USER_DATA,
  payload: {
    user,
    token,
  }
});

/**
 * Handles get user data error
 */
const getUserDataFailure = () => ({
  type: GET_USER_DATA_FAIL,
  payload: { error },
});

/**
 * @param {object} loginObject email and password object
 * @param {boolean} rememberLogin
 * @returns {function} dispatch functions
 */
const loginUser = (loginObject, rememberLogin) => async (dispatch) => {
  try {
    dispatch(loadingStateHandler());
    const response = await axios.post('/auth/login', loginObject);
    return dispatch(onLoginSuccessHandler(response.data, rememberLogin));
  } catch (err) {
    return dispatch(onFailureHandler(err.response.data));
  }
};

const getUserData = userArray => (dispatch) => {
  if (userArray[0].split('=')[0] === '?token') {
    const user = {
      id: userArray[1].split('=')[1],
      firstname: userArray[2].split('=')[1],
      lastname: userArray[3].split('=')[1],
      username: userArray[4].split('=')[1],
      email: userArray[5].split('=')[1]
    };
    const token = userArray[0].split('=')[1];

    const {
      id,
      firstname,
      lastname,
      username,
      email
    } = user;
    if (id === '' || firstname === '' || lastname === '' || username === '' || email === '') {
      return dispatch(getUserDataFailure());
    }
    dispatch(getUserDataSuccess(user, token));
    return user;
  }
  return dispatch(getUserDataFailure());
};

export {
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
  loginUser
};
