import { articleActionTypes } from '../action-types';

const { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, GET_ARTICLES_BEGIN } = articleActionTypes;

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

export { articleReducer, initialState };
