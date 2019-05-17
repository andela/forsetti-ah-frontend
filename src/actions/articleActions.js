import { articleActionTypes } from '../action-types';
import axios from '../config/axiosConfig';

const { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, GET_ARTICLES_BEGIN } = articleActionTypes;

const loadingStateHandler = () => ({
  type: GET_ARTICLES_BEGIN
});

const getAritlcesSuccessHandler = (payload = [], count = 0) => ({
  type: GET_ARTICLES_SUCCESS,
  payload,
  count
});

const getAritlcesFailureHandler = (payload = '') => ({
  type: GET_ARTICLES_FAIL,
  payload
});

const getAritlces = page => async (dispatch) => {
  dispatch(loadingStateHandler());
  try {
    const response = await axios.get(`/article?page=${page}`);
    const { rows, count } = response.data.data.articles;
    return dispatch(getAritlcesSuccessHandler(rows, count));
  } catch (error) {
    return dispatch(getAritlcesFailureHandler(error.message));
  }
};

export {
  loadingStateHandler,
  getAritlcesSuccessHandler,
  getAritlcesFailureHandler,
  getAritlces
};
