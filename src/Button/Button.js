import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className="cb-Button" {...props}>Test button</button>
    );
}

Button.propTypes = {
	/** Click handler */
	onClick: PropTypes.func
};

export default Button;