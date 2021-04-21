import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';

function FGLTModal({
  currencyConfig,
  disableTopUp,
  onTopUp,
  alertLabel,
  submitButtonLabel,
  closeButtonLabel,
  title,
  onClose,
  ...props
}) {
  if (!currencyConfig) return null;
  return (
    <Modal className="cb-FGLTModal" {...props}>
      <ModalHeader>{title}</ModalHeader>
      <ModalContent>
        <div>
          {currencyConfig.title} {alertLabel}
        </div>
      </ModalContent>
      <ModalActions>
        <button
          className="cb-Button primary"
          onClick={!disableTopUp ? onTopUp : null}
          disabled={disableTopUp}
        >
          {submitButtonLabel}
        </button>
        <button className="cb-Button" onClick={onClose}>
          {closeButtonLabel}
        </button>
      </ModalActions>
    </Modal>
  );
}

FGLTModal.propTypes = {
  currencyConfig: PropTypes.shape({ title: PropTypes.string }),
  disableTopUp: PropTypes.bool,
  onTopUp: PropTypes.func,
  alertLabel: PropTypes.string,
  submitButtonLabel: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

FGLTModal.defaultProps = {
  alertLabel: 'balance should reach 50 before you can top up your account',
  submitButtonLabel: 'TOP UP',
  closeButtonLabel: 'Close',
  title: 'Top Up FGLT',
};

export default FGLTModal;
