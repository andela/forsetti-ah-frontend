import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_BEGIN,
  GET_TOP_RATED
} from '../action-types';

const initialState = {
  isLoading: false,
  articles: [],
  articlesError: ''
};

const articleReducer = (state = initialState, action) => {
  const { type, payload, count } = action;
  const { articles } = state;
  switch (type) {
    case GET_ARTICLES_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...new Set([
          ...articles,
          ...payload
        ])],
        count,
        isLoading: false
      };
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        articlesError: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

const defualtTopRatedArticles = [];

const getTopRatedReducer = (state = defualtTopRatedArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_RATED:
      return {
        ...state,
        topRated: payload
      };

    default:
      return state;
  }
};

export { articleReducer, initialState, getTopRatedReducer };
