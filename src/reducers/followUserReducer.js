import { FOLLOW_USER_BEGIN, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE } from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
};

const followUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FOLLOW_USER_BEGIN:
      return {
        isLoading: true
      };
    case FOLLOW_USER_SUCCESS:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    case FOLLOW_USER_FAILURE:
      return {
        isLoading: false,
        status: payload.status,
        message: payload.message
      };
    default:
      return state;
  }
};

export { followUserReducer, initialState };
