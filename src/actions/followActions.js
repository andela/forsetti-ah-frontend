import axios from '../config/axiosConfig';
import {
  GET_FOLLOWERS_BEGIN,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_FOLLOWINGS_BEGIN,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
  FOLLOW_USER_BEGIN,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_BEGIN,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  OPEN_FOLLOWER_MODAL,
  CLOSE_FOLLOWER_MODAL
} from '../action-types';

/**
 * Dispatch action for follower modal
 * @param {boolean} mode
 */
const toggleFollowerModal = (mode) => {
  if (mode === 'open') {
    return {
      type: OPEN_FOLLOWER_MODAL
    };
  } return {
    type: CLOSE_FOLLOWER_MODAL
  };
};


/**
 * Dispatches loading state for get followers
 */
const handleGetFollowersBegin = () => ({
  type: GET_FOLLOWERS_BEGIN
});

/**
 * Dispatches get followers response data
 * @param {object} payload response from API
 */
const handleGetFollowersSuccess = (payload = {}) => ({
  type: GET_FOLLOWERS_SUCCESS,
  payload
});

/**
 * Dispatches get followers failure data
 * @param {object} payload response from API
 */
const handleGetFollowersFailure = (payload = {}) => ({
  type: GET_FOLLOWERS_FAILURE,
  payload
});

/**
 * Dispatches loading state for get followings
 */
const handleGetFollowingsBegin = () => ({
  type: GET_FOLLOWINGS_BEGIN
});

/**
 * Dispatches get followings response data
 * @param {object} payload response from API
 */
const handleGetFollowingsSuccess = (payload = {}) => ({
  type: GET_FOLLOWINGS_SUCCESS,
  payload
});

/**
 * Dispatches get followings failure data
 * @param {object} payload response from API
 */
const handleGetFollowingsFailure = (payload = {}) => ({
  type: GET_FOLLOWINGS_FAILURE,
  payload
});

/**
 * Dispatches loading state for follow user
 */
const handleFollowUserBegin = () => ({
  type: FOLLOW_USER_BEGIN
});

/**
 * Dispatches follow user response data
 * @param {object} payload response from API
 */
const handleFollowUserSuccess = (payload = {}) => ({
  type: FOLLOW_USER_SUCCESS,
  payload
});

/**
 * Dispatches follow user failure data
 * @param {object} payload response from API
 */
const handleFollowUserFailure = (payload = {}) => ({
  type: FOLLOW_USER_FAILURE,
  payload
});

/**
 * Dispatches loading state for unfollow user
 */
const handleUnFollowUserBegin = () => ({
  type: UNFOLLOW_USER_BEGIN
});

/**
 * Dispatches unfollow user response data
 * @param {object} payload response from API
 */
const handleUnFollowUserSuccess = (payload = {}) => ({
  type: UNFOLLOW_USER_SUCCESS,
  payload
});

/**
 * Dispatches unfollow user failure data
 * @param {object} payload response from API
 */
const handleUnFollowUserFailure = (payload = {}) => ({
  type: UNFOLLOW_USER_FAILURE,
  payload
});

/**
 * Get followers action creator
 */

const getFollowers = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  dispatch(handleGetFollowersBegin());
  try {
    const response = await axios.get('/profiles/followers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return dispatch(handleGetFollowersSuccess(response.data));
  } catch (error) {
    return dispatch(handleGetFollowersFailure(error.response.data));
  }
};


/**
 * Get followings action creator
 */

const getFollowings = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  dispatch(handleGetFollowingsBegin());
  try {
    const response = await axios.get('/profiles/followee', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return dispatch(handleGetFollowingsSuccess(response.data));
  } catch (error) {
    return dispatch(handleGetFollowingsFailure(error.response.data));
  }
};

/**
 * Follow user action creator
 * @param {string} username
 */

const followUser = username => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  dispatch(handleFollowUserBegin());
  const header = {
    'Content-Type': null,
    authorization: `Bearer ${token}`
  };
  try {
    const response = await axios.post(`/profiles/${username}/follow`, {
      headers: header
    });
    return dispatch(handleFollowUserSuccess(response.data));
  } catch (error) {
    return dispatch(handleFollowUserFailure(error.response.data));
  }
};

/**
 * un follow user action creator
 * @param {string} username
 */

const unFollowUser = username => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  dispatch(handleUnFollowUserBegin());
  try {
    const response = await axios.delete(`/profiles/${username}/follow`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return dispatch(handleUnFollowUserSuccess(response.data));
  } catch (error) {
    return dispatch(handleUnFollowUserFailure(error.response.data));
  }
};

export {
  handleFollowUserBegin,
  handleFollowUserSuccess,
  handleFollowUserFailure,
  handleGetFollowersBegin,
  handleGetFollowersSuccess,
  handleGetFollowersFailure,
  handleGetFollowingsBegin,
  handleGetFollowingsSuccess,
  handleGetFollowingsFailure,
  handleUnFollowUserBegin,
  handleUnFollowUserSuccess,
  handleUnFollowUserFailure,
  getFollowers,
  getFollowings,
  followUser,
  unFollowUser,
  toggleFollowerModal
};
