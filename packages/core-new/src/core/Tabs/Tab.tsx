import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '../ButtonBase';
import { TabProps } from './Tab.type';

export const Tab = (props: TabProps) => {
  const {
    value,
    selected,
    onChange,
    color,
    label,
    onClick,
    variant,
    className,
    ...buttonProps
  } = props;

  const handleClick = (event: any) => {
    if (!selected && onChange) {
      onChange(value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonBase
      className={clsx('cb-Tab', className, {
        [`cb-Tab_color_${color}`]: color,
        [`cb-Tab_variant_${variant}`]: variant,
        'cb-Tab_selected': selected,
      })}
      onClick={handleClick}
      {...buttonProps}
    >
      {label}
    </ButtonBase>
  );
};
