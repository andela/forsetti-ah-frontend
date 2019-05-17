import { combineReducers } from 'redux';
import { navBarReducer } from './navBarReducers';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';
import { articleReducer } from './articleReducers';
import singleArticleReducer from './articleReducer';


const Reducer = combineReducers({
  showSideDrawer: navBarReducer,
  modal: modalReducer,
  auth: authReducer,
  articles: articleReducer,
  article: singleArticleReducer
});

export { Reducer, articleReducer, singleArticleReducer };
