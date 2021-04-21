import React from 'react';
import clsx from 'classnames';

// local files
import ButtonBase from '../ButtonBase';

export const Tab = (props) => {
  const { value, selected, onChange, color, label, onClick, variant, className, ...buttonProps } = props;

  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonBase
      className={clsx('cb-MobileTab', className, {
        [`cb-MobileTab--color--${color}`]: color,
        [`cb-MobileTab--variant--${variant}`]: variant,
        'cb-MobileTab--selected': selected,
      })}
      onClick={handleClick}
      {...buttonProps}
    >
      {label}
    </ButtonBase>
  );
};
