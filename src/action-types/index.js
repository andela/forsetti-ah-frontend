import navBarActionTypes from './navBarActionTypes';
import auth from './authActionTypes';
import article from './article.action-type';
import modalTypes from './modalTypes';
import articleActionTypes from './articleActionTypes';
import createArticleActionTypes from './articles.action-type';

const {
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  GET_USER_DATA_FAIL,
  GET_USER_DATA
} = auth;
const { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND } = article;
const {
  OPEN_MODAL, CLOSE_MODAL, OPEN_TAGS_MODAL, CLOSE_TAGS_MODAL
} = modalTypes;
const { SHOW_SIDEDRAWER, HIDE_SIDEDRAWER } = navBarActionTypes;
const { GET_ARTICLES_BEGIN, GET_ARTICLES_FAIL, GET_ARTICLES_SUCCESS } = articleActionTypes;

export {
  SHOW_SIDEDRAWER,
  HIDE_SIDEDRAWER,
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_SUCCESS,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  createArticleActionTypes,
  GET_USER_DATA,
  GET_USER_DATA_FAIL,
  auth,
  navBarActionTypes,
  modalTypes,
};
