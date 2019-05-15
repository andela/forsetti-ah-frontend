import { modalReducer, initialState } from '../../reducers/modalReducer';

import { OPEN_MODAL, CLOSE_MODAL }  from '../../action-types';

describe('Modal', () => {
  it('should return initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should return true OPEN_MODAL action', () => {
    expect(modalReducer(initialState, {
      type: OPEN_MODAL,
    })).toEqual({
      showModal: true
    });
  });

  it('should return false CLOSE_MODAL action', () => {
    expect(modalReducer(initialState, {
      type: CLOSE_MODAL,
    })).toEqual({
      showModal: false
    });
  });
});
