import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function RoundButton({
  children, type = 'green', className, ...props
}) {
  return (
    <div className={classNames('cb-RoundButton', `cb-RoundButton--${type}`, className)} {...props}>
      {children}
    </div>
  );
}

RoundButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default RoundButton;
