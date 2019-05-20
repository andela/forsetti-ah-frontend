import { OPEN_FOLLOWER_MODAL, CLOSE_FOLLOWER_MODAL } from '../action-types';

const initialState = {
  showModal: false,
  showTagsModal: false,
  displayModal: false,
  followModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        showModal: false,
      };
    case 'OPEN_TAGS_MODAL':
      return {
        showTagsModal: true
      };
    case 'CLOSE_TAGS_MODAL':
      return {
        showTagsModal: false
      };
    case 'OPEN_SIGNUP_MODAL':
      return {
        displayModal: true
      };
    case 'CLOSE_SIGNUP_MODAL':
      return {
        displayModal: false,
      };
    case OPEN_FOLLOWER_MODAL:
      return {
        followModal: true,
      };
    case CLOSE_FOLLOWER_MODAL:
      return {
        followModal: false,
      };
    default:
      return state;
  }
};

export { modalReducer, initialState };
