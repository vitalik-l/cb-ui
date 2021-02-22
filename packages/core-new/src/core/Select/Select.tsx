import React from 'react';
import clsx from 'clsx';

// local files
import { useControlled } from '../hooks/useControlled';
import classes from '../styles/classes.module.scss';
import './Select.scss';

type Props = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  autoWidth?: boolean;
  icon?: any;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = (props: Props) => {
  const {
    className,
    disabled,
    invalid,
    fullWidth,
    autoWidth,
    value: valueProp,
    icon,
    defaultValue,
    onChange,
    ...selectOptions
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div
      className={clsx(classes.Select, className, {
        [`${classes.Select}_disabled`]: disabled,
        [`${classes.Select}_invalid`]: invalid,
        [`${classes.Select}_fullWidth`]: fullWidth,
        [`${classes.Select}-autoWidth`]: autoWidth,
      })}
    >
      {autoWidth && <div className={`${classes.Select}__value`}>{value}</div>}
      <select
        className={`${classes.Select}__item`}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...selectOptions}
      />
      {React.cloneElement(icon, {
        className: `${classes.Select}__icon`,
        'aria-hidden': 'true',
      })}
    </div>
  );
};

Select.defaultProps = {
  icon: (
    <svg focusable="false" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  ),
};
