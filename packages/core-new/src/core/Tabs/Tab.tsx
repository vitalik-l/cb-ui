import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '../ButtonBase';

type ClassesType = {
  root?: string;
  selected?: string;
  [key: string]: any;
}

export type TabProps = {
  selected?: boolean;
  color?: string;
  onChange?: (value: any) => void;
  variant?: string;
  value?: any;
  className?: string;
  label?: React.ReactNode;
  onClick?: any;
  classes?: ClassesType;
};

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
    classes,
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
      className={clsx(classes?.root, className, {
        [classes?.[`color_${color}`] as string]: color,
        [classes?.[`variant_${variant}`] as string]: variant,
        [classes?.selected as string]: selected,
      })}
      onClick={handleClick}
      {...buttonProps}
    >
      {label}
    </ButtonBase>
  );
};
