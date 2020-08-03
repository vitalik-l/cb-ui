import React from 'react';
import PropTypes from 'prop-types';

function ModalHeader({ children }) {
  return (
    <div className="cb-Modal__header cb-Modal__section">
      {children}
    </div>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.any,
};

export default ModalHeader;
