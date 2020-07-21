import React from 'react';
import PropTypes from 'prop-types';

function ModalContent({children}) {
	return (
		<div className="cb-Modal__content cb-Modal__section">
			{children}
		</div>
	)
}

ModalContent.propTypes = {
	children: PropTypes.any
};

export default ModalContent;