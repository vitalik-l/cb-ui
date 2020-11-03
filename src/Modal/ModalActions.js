import React from 'react';
import PropTypes from 'prop-types';

function ModalActions({ children }) {
  return <div className="cb-Modal__actions">{children}</div>;
}

ModalActions.propTypes = {
  children: PropTypes.node,
};

export default ModalActions;
