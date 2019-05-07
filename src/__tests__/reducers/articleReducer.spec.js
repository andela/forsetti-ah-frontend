import { singleArticleReducer } from '../../reducers';
import { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND } from '../../action-types';

const article = {
  author: {
    id: 'ffffabd5-4a5b',
    bio: 'test bio',
    image: 'image',
    username: 'john doe',
  },
  id: 'ffffabd5-4a5b',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  claps: '2 claps',
  comments: '0 comments',
  description: 'Lorem ipsum dolor sit amet',
  rating: '0',
  readingTime: '2',
  slug: 'Lorem ipsum dolor sit amet-12345',
  title: 'Lorem ipsum dolor sit amet',
  success: true
};

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
const error = {
  message: 'Article not found'
}
test('should return empty array default', () => {
  const reducer = singleArticleReducer(undefined, { type: '@@INIT' });

  expect(reducer).toEqual(defualtState);
});

test('should return a single article object', () => {
  const reducer = singleArticleReducer(defualtState, {
    type: GET_SINGLE_ARTICLE,
    article
  });
  expect(reducer).toEqual({ ...article });
});

test('should return article not found object', () => {
  const reducer = singleArticleReducer(defualtState, {
    type: ARTICLE_NOT_FOUND,
    error: error.message
  });
  expect(reducer).toEqual({
    message: error.message,
    success: false
  });
});
