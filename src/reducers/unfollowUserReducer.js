import { UNFOLLOW_USER_BEGIN, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE } from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
};

const unFollowUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UNFOLLOW_USER_BEGIN:
      return {
        isLoading: true
      };
    case UNFOLLOW_USER_SUCCESS:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    case UNFOLLOW_USER_FAILURE:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    default:
      return state;
  }
};

export { unFollowUserReducer, initialState };
