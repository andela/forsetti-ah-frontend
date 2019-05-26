import {
  OPEN_EMAIL_SHARE_MODAL,
  CLOSE_EMAIL_SHARE_MODAL,
  EMAIL_SHARE_BEGINS,
  EMAIL_SHARE_SUCCESS,
  EMAIL_SHARE_FAIL
} from '../action-types';

const initialState = {
  showEmailShareModal: false,
  isLoading: false,
  emailShare: {},
  emailShareError: ''
};

const emailShareModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EMAIL_SHARE_MODAL:
      return {
        ...state,
        showEmailShareModal: true
      };
    case CLOSE_EMAIL_SHARE_MODAL:
      return {
        ...state,
        showEmailShareModal: false
      };
    case EMAIL_SHARE_BEGINS:
      return {
        ...state,
        isLoading: true
      };
    case EMAIL_SHARE_SUCCESS:
      return {
        ...state,
        emailShare: action.payload,
        isLoading: false
      };
    case EMAIL_SHARE_FAIL:
      return {
        ...state,
        emailShareError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export { emailShareModalReducer, initialState };
