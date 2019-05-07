import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL
} from '../action-types';


/**
 * open the modal
 * @returns {obect} action object
 */
const openModalAction = () => ({
  type: OPEN_MODAL,
});

const openSignupModalAction = () => ({
  type: OPEN_SIGNUP_MODAL,
});

const closeSignUpModalAction = () => ({
  type: CLOSE_SIGNUP_MODAL
});

/**
 * close the modal
 * @returns {object} action object
 */
const closeModalAction = () => ({
  type: CLOSE_MODAL,
});

export {
  openModalAction,
  closeModalAction,
  openSignupModalAction,
  closeSignUpModalAction
};
