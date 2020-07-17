import React from 'react';
import Tooltip from '../Tooltip';
import InfoIcon from '../Icons/InfoIcon';
import classNames from 'classnames';

function Hint({show, children, className, arrowSide, arrowAlign, ...props}) {
	return (
		<Tooltip
			className={classNames('cb-Hint', className, {[`arrow-side-${arrowSide}`]: arrowSide, [`arrow-align-${arrowAlign}`]: arrowAlign})}
			show={show}
			{...props}
		>
			<div className="cb-Hint-container">
				<div className="arrow" />
				<div className="arrow-border" />
				<InfoIcon />
				<div className="cb-Hint-content">
					{children}
				</div>
			</div>
		</Tooltip>
	)
}

export default Hint;