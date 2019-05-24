import { showSideDrawerAction, hideSideDrawerAction } from './navBarActions';
import {
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  openSignupModalAction,
  closeSignUpModalAction
} from './modalActions';
import {
  loginUser,
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
  signupBegin,
  signupSuccess,
  signupFailure,
  signUpUser
} from './authActions';
import {
  loadingStateHandler,
  getAritlcesSuccessHandler,
  getAritlcesFailureHandler,
  getAritlces,
  getSingleArticle,
  singleArticle
} from './articleActions';
import { setLoading, createArticle, createArticleError } from './articles.actions';
import { getNotifications, getUserNotifications } from './notifcationActions';
import {
  closeModal,
  openModal,
  forgotPassword,
  resetPassword,
  getToken,
  openResetModal,
  closeResetModal
} from './resetPasswordActions';
import {
  getCurrentProfile,
  setProfileLoading,
  updateProfile
} from './profileActions';

export {
  showSideDrawerAction,
  hideSideDrawerAction,
  loginUser,
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  loadingStateHandler,
  getAritlcesSuccessHandler,
  getAritlcesFailureHandler,
  getAritlces,
  getSingleArticle,
  singleArticle,
  setLoading,
  createArticle,
  createArticleError,
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
  openSignupModalAction,
  closeSignUpModalAction,
  signupBegin,
  signupSuccess,
  signupFailure,
  signUpUser,
  getNotifications,
  getUserNotifications,
  closeModal,
  openModal,
  forgotPassword,
  resetPassword,
  getToken,
  openResetModal,
  closeResetModal,
  getCurrentProfile,
  setProfileLoading,
  updateProfile
};
