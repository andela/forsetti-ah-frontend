import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { createArticleActionTypes } from '../../action-types';
import { setLoading, createArticle, createArticleError } from '../../actions';

const { CREATE_ARTICLE_LOADING, CREATE_ARTICLE, CREATE_ARTICLE_ERROR } = createArticleActionTypes;
const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

const articleInfo = {
  title: 'sample',
  description: 'sample article body...',
  body: 'sample article body',
  published: false
};

const mockPayload = {
  data: {
    article: {
      id: '3485268745682',
      slug: 'sample-74685638',
      title: 'sample',
      body: 'sample article body',
      description: 'sample article body...',
      published: false,
      createdAt: Date.now()
    },
    author: {
      firstname: 'Melanie',
      email: 'melanie@dara.com'
    }
  }
};

describe('create article actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  test('it should return correct action for loading state', () => {
    const action = setLoading(true);
    expect(action).toEqual({
      type: CREATE_ARTICLE_LOADING,
      payload: true
    });
  });

  test('it should return correct action for error state', () => {
    const action = createArticleError('error message');
    expect(action).toEqual({
      type: CREATE_ARTICLE_ERROR,
      payload: 'error message'
    });
  });

  test('should dispatch CREATE_ARTICLE on successfull post', () => {
    mock.onPost('/article').reply(201, mockPayload);

    const expectedAction = [
      {
        type: CREATE_ARTICLE_LOADING,
        payload: true
      },
      {
        type: CREATE_ARTICLE,
        payload: mockPayload.data
      }
    ];

    store.dispatch(createArticle(articleInfo)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should dispatch CREATE_ARTICLE_ERROR on error response', () => {
    mock.onPost('/article').reply(500, mockPayload);

    const expectedAction = [
      {
        type: CREATE_ARTICLE_LOADING,
        payload: true
      },
      {
        type: CREATE_ARTICLE_LOADING,
        payload: false
      },
      {
        type: CREATE_ARTICLE_ERROR,
        payload: 'error message'
      },
    ];

    store.dispatch(createArticle(articleInfo)).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
