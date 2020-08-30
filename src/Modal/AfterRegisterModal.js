import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';

function AfterRegisterModal(props) {
  const { onClose, onLogin } = props;
  return (
    <Modal {...props}>
      <ModalHeader>
        Register
      </ModalHeader>
      <ModalContent>
        Your account has been created. Login, please.
      </ModalContent>
      <ModalActions>
        <button className="cb-Button" onClick={onClose}>Cancel</button>
        <button className="cb-Button primary" onClick={onLogin}>Login</button>
      </ModalActions>
    </Modal>
  );
}

AfterRegisterModal.propTypes = {
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
};

export default AfterRegisterModal;
