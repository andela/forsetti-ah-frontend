import { GET_FOLLOWINGS_BEGIN, GET_FOLLOWINGS_SUCCESS, GET_FOLLOWINGS_FAILURE } from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

const getFollowingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOLLOWINGS_BEGIN:
      return {
        isLoading: true
      };
    case GET_FOLLOWINGS_SUCCESS:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message,
        // eslint-disable-next-line no-prototype-builtins
        data: payload.hasOwnProperty('data') ? payload.data.following : []
      };
    case GET_FOLLOWINGS_FAILURE:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    default:
      return state;
  }
};

export { getFollowingsReducer, initialState };
