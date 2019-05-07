import { modalTypes } from '../action-types';

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

/**
 * open the modal
 * @returns {obect} action object
 */
const openModalAction = () => ({
  type: OPEN_MODAL,
});

/**
 * close the modal
 * @returns {obect} action object
 */
const closeModalAction = () => ({
  type: CLOSE_MODAL,
});

export { openModalAction, closeModalAction };
