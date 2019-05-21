import {
  OPEN_EMAIL_SHARE_MODAL,
  CLOSE_EMAIL_SHARE_MODAL,
  EMAIL_SHARE_BEGINS,
  EMAIL_SHARE_SUCCESS,
  EMAIL_SHARE_FAIL
} from '../action-types';

import axios from '../config/axiosConfig';

const openEmailShareModal = () => ({
  type: OPEN_EMAIL_SHARE_MODAL
});

const closeEmailShareModal = () => ({
  type: CLOSE_EMAIL_SHARE_MODAL
});

const loadingEmailShareStateHandler = () => ({
  type: EMAIL_SHARE_BEGINS
});

const emailShareSuccess = (payload = {}) => ({
  type: EMAIL_SHARE_SUCCESS,
  payload
});

const emailShareFailure = (payload = '') => ({
  type: EMAIL_SHARE_FAIL,
  payload
});

const emailShare = (slug, payload) => async (dispatch) => {
  dispatch(loadingEmailShareStateHandler());
  try {
    const token = localStorage.getItem('token');

    const header = {
      Authorization: `Bearer ${token}`
    };

    const response = await axios.post(`article/${slug}/share`, payload, { headers: header });
    const { data } = response;
    dispatch(emailShareSuccess(data));
    return data;
  } catch (error) {
    return dispatch(emailShareFailure(error.message));
  }
};

export {
  openEmailShareModal,
  closeEmailShareModal,
  emailShare,
  emailShareSuccess,
  emailShareFailure,
  loadingEmailShareStateHandler
};
