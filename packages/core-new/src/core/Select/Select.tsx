import React from 'react';
import clsx from 'clsx';

// local files
import { useControlled } from '../hooks/useControlled';
import { useClasses } from '../hooks/useClasses';
import coreStyles from './Select.module.scss';

type Props = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  autoWidth?: boolean;
  icon?: any;
  format?: any;
  disabled?: boolean;
  classes?: {
    disabled?: string;
    invalid?: string;
    fullWidth?: string;
    autoWidth?: string;
    value?: string;
    selectItem?: string;
    icon?: string;
  };
  classNamePrefix?: string;
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
    format,
    classes: classesProp,
    classNamePrefix,
    ...selectOptions
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });
  const classes = useClasses(
    {
      disabled: '_disabled',
      invalid: '_invalid',
      fullWidth: '_fullWidth',
      autoWidth: '-autoWidth',
      value: '__value',
      selectItem: '__item',
      icon: '__icon',
    },
    props,
  );

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div
      className={clsx(coreStyles.Select, className, classes.root, {
        [clsx(coreStyles.disabled, classes.disabled)]: disabled,
        [clsx(coreStyles.invalid, classes.invalid)]: invalid,
        [clsx(coreStyles.fullWidth, classes.fullWidth)]: fullWidth,
        [clsx(coreStyles.autoWidth, classes.autoWidth)]: autoWidth,
      })}
    >
      {autoWidth && (
        <div className={clsx(coreStyles.value, classes.value)}>
          {typeof format === 'function' ? format(value) : value}
        </div>
      )}
      <select
        className={clsx(coreStyles.selectItem, classes.selectItem)}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...selectOptions}
      />
      {React.cloneElement(icon, {
        className: clsx(coreStyles.icon, classes.icon),
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
