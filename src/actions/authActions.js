import { auth } from '../action-types';
import axios from '../config/axiosConfig';

const { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_BEGIN } = auth;

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

export default loginUser;
