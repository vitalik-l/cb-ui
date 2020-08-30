import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function RoundButton({
  children, type, className, ...props
}) {
  return (
    <div className={classNames('cb-RoundButton', `cb-RoundButton--${type}`, className)} {...props}>
      {children}
    </div>
  );
}

RoundButton.defaultProps = {
  type: 'green',
};

RoundButton.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default RoundButton;
