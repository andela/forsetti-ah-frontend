import { modalReducer, initialState } from '../../reducers/modalReducer';

import { modalTypes } from '../../action-types';

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

describe('Modal', () => {
  it('should return initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should return true for OPEN_MODAL action', () => {
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
