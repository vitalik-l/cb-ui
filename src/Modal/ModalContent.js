import React from 'react';

function ModalContent({children}) {
	return (
		<div className="cb-Modal__content cb-Modal__section">
			{children}
		</div>
	)
}

export default ModalContent;