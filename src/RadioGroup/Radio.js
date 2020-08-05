import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Radio = memo((props) => {
  const {
    children, active, value, className, ...otherProps
  } = props;

  return (
    <div
      className={classNames('cb-Radio', className, { 'cb-Radio--active': active })}
      data-value={value}
      role="radio"
      tabIndex={0}
      aria-checked={active}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Radio.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Radio.displayName = 'Radio';

export default Radio;
