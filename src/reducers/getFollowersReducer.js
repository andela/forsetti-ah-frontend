import { GET_FOLLOWERS_BEGIN, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE } from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

const getFollowersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOLLOWERS_BEGIN:
      return {
        isLoading: true
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message,
        // eslint-disable-next-line no-prototype-builtins
        data: payload.hasOwnProperty('data') ? payload.data.followers : []
      };
    case GET_FOLLOWERS_FAILURE:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    default:
      return state;
  }
};

export { getFollowersReducer, initialState };
