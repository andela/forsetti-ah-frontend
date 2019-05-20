import React from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import CancelIcon from './common/CancelIcon';
import FollowerPage from './FollowerPage';
import { toggleFollowerModal } from '../actions';

const FollowerModal = ({ isOpen, dispatch }) => (
  <Modal isOpen={isOpen}>
    <CancelIcon clicked={() => dispatch(toggleFollowerModal('close'))} />
    <FollowerPage />
  </Modal>
);

const FollowerModalComponent = connect()(FollowerModal);

export { FollowerModal, FollowerModalComponent };
