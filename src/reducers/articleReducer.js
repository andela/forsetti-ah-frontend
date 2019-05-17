import { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND } from '../action-types';

const defualtState = {
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

const singleArticleReducer = (state = defualtState, action) => {
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
