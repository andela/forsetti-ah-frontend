import { combineReducers } from 'redux';
import { navBarReducer } from './navBarReducers';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';
import { articleReducer } from './articleReducers';
import singleArticleReducer from './articleReducer';
import createArticleReducer from './createArticle.reducers';
import { resetPasswordReducers } from './resetPasswordReducers';

import notificationReducers from './notifcationReducers';

const Reducer = combineReducers({
  showSideDrawer: navBarReducer,
  modal: modalReducer,
  auth: authReducer,
  articles: articleReducer,
  article: singleArticleReducer,
  createArticle: createArticleReducer,
  notifications: notificationReducers,
  reset: resetPasswordReducers
});

export {
  Reducer,
  articleReducer,
  singleArticleReducer,
  notificationReducers
};
