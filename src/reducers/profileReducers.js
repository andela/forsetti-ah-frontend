import {
  GET_PROFILE,
  PROFILE_LOADING,
  UPDATE_PROFILE
} from '../action-types';

const initialState = {
  profile: {},
  loading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload.data,
        loading: false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default profileReducer;
