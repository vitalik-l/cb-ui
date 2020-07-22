import React from 'react';
import PropTypes from 'prop-types';

const TickerValue = React.forwardRef(({type, children, ...props}, ref) => {
	return (
		<div className='cb-TickerValue' ref={ref} {...props}>
			<div className={type === 'up' ? 'cb-TickerValue__up' : type === 'down' ? 'cb-TickerValue__down' : null}>
				{children}
			</div>
		</div>
	);
});

TickerValue.displayName = 'TickerValue';

TickerValue.propTypes = {
	/**
	 * Value to be rendered
	 */
	children: PropTypes.any,
	/**
	 * Type of value
	 * up - green
	 * down - red
	 */
	type: PropTypes.oneOf(['down', 'up']),
	/**
	 * is down label, rendered with red color by default
	 */
	down: PropTypes.bool,
};

export default TickerValue;
