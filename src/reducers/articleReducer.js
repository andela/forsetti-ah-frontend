import { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND, GET_TOP_RATED } from '../action-types';

const defaultSingleArticle = {
  author: {
    id: '',
    bio: '',
    image: '',
    username: '',
  },
  id: '',
  body: '',
  claps: '',
  comments: '',
  description: '',
  rating: '',
  readingTime: '',
  slug: '',
  title: '',
  success: true
};

const singleArticleReducer = (state = defaultSingleArticle, action) => {
  const { type } = action;

  switch (type) {
    case GET_SINGLE_ARTICLE:
      return {
        ...state,
        ...action.article,
        success: true,
      };

    case ARTICLE_NOT_FOUND:
      return {
        message: action.error,
        success: false
      };

    default:
      return state;
  }
};

export default singleArticleReducer;
