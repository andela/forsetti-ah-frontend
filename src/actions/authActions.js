import { auth } from '../action-types';
import axios from '../config/axiosConfig';

const {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_BEGIN,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} = auth;

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

const signupBegin = () => ({
  type: SIGNUP_BEGIN
});

const signupSuccess = (user = {}) => ({
  type: SIGNUP_SUCCESS,
  payload: { user }
});

const signupFailure = (error = {}) => ({
  type: SIGNUP_FAILURE,
  payload: { error }
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
  } catch (error) {
    return dispatch(onFailureHandler(error.response.data));
  }
};

const signUpUser = user => (dispatch) => {
  dispatch(signupBegin());
  axios.post('https://forsetti-ah-backend-staging.herokuapp.com/api/v1/auth/signup', user)
    .then((response) => {
      dispatch(signupSuccess(response.data.data[0].user));
    })
    .catch((errors) => {
      dispatch(signupFailure(errors.response.data.message));
    });
};

export {
  signupBegin, signupSuccess, signupFailure, signUpUser, loginUser
};
