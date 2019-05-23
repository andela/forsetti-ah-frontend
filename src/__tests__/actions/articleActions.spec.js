import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';
import { 
    loadingStateHandler, 
    getAritlces,
    getAritlcesSuccessHandler,
    getAritlcesFailureHandler,
    getTopRatedArticles,
    topRatedArticles
} from '../../actions';
import {
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,
    GET_ARTICLES_BEGIN,
    GET_TOP_RATED
} from '../../action-types';

import { articles as articlesMock, articleFail } from '../../testUtils/testsMockData/articles.mock-data';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Get articles actions', () => {
    test('should setup loading state action object', () => {
        expect(loadingStateHandler()).toEqual({
            type: GET_ARTICLES_BEGIN
        });
    });

    test('should setup article success action object', () => {
        expect(getAritlcesSuccessHandler(articlesMock, 0)).toEqual({
            type: GET_ARTICLES_SUCCESS,
            payload: articlesMock,
            count: 0
        });
    });
    
    test('should setup article success action object', () => {
        expect(getAritlcesSuccessHandler()).toEqual({
            type: GET_ARTICLES_SUCCESS,
            payload: [],
            count: 0
        });
    });
    test('should setup article fail action object', () => {
        expect(getAritlcesFailureHandler(articleFail)).toEqual({
            type: GET_ARTICLES_FAIL,
            payload: articleFail
        });
    });
    test('should get all articles', () => {
        const payload = { 
            data: {
                articles: {
                    count: 1, 
                    nextpage: true, 
                    rows: articlesMock 
                },
                pages: 1
            }
        };
        const store = mockStore({ articles: [] });
        axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({data: payload}))
        const expectedActions = [{ type: GET_ARTICLES_BEGIN }, { type: GET_ARTICLES_SUCCESS, payload, count: 1 }];
        return store.dispatch(getAritlces(1))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                })
    });

    test('should return error object', () => {
        const payload = 'error message';
        const store = mockStore({ articles: [] });
        axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({data: payload}))
        const expectedActions = [{ type: GET_ARTICLES_BEGIN }, { type: GET_ARTICLES_FAIL, payload, count: 1 }];
        return store.dispatch(getAritlces(1))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                })
    });
});

describe('Get Toprated articles', () => {
  it('should return default payload', () => {
      const action = topRatedArticles();

      expect(action).toEqual({
          type: GET_TOP_RATED,
          payload: []
      })
  });

  it('should return get top articles action creator', () => {
      const store = mockStore({});
      const payload = {
              data: {
                  article: [{
                    id: 'efbd2ccd-4e06-4ecb-bfe0-baf303cd5577',
                    slug: 'Gildard is working on it-12345678',
                    title: 'Gildard is working on it',
                    description: 'gildard@dickson.com',
                    body: 'Dickson is a boy',
                    image: 'https://res.cloudinary.com/forsetti/image/upload/v1554746740/forsetti/b9leichyadygoqudemre.jpg',
                    tagList: null,
                    createdAt: '2019-05-22T11:44:36.650Z',
                    updatedAt: '2019-05-22T11:44:36.650Z',
                  }]
              }
        };
      axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({ data: payload}));

      return store.dispatch(getTopRatedArticles())
      .then(() => {
          expect(store.getActions()[0].type).toEqual(GET_TOP_RATED);
      });
  });
});
