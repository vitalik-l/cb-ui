import React from 'react';
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

export default RoundButton;
