import React from 'react';
import clsx from 'clsx';

// local files
import { useControlled } from '../hooks/useControlled';
import { useClasses } from '../hooks/useClasses';
import styles from './CoreSelect.module.scss';

type Props = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  autoWidth?: boolean;
  icon?: any;
  format?: any;
  disabled?: boolean;
  classes?: {
    root?: string;
    disabled?: string;
    invalid?: string;
    fullWidth?: string;
    autoWidth?: string;
    value?: string;
    select?: string;
    icon?: string;
  };
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
    ...selectOptions
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });
  const classes = useClasses(styles, classesProp);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div
      className={clsx(className, classes?.root, {
        [classes?.disabled]: disabled,
        [classes?.invalid]: invalid,
        [classes?.fullWidth]: fullWidth,
        [classes?.autoWidth]: autoWidth,
      })}
    >
      {autoWidth && (
        <div className={classes?.value}>{typeof format === 'function' ? format(value) : value}</div>
      )}
      <select
        className={classes?.select}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...selectOptions}
      />
      {React.cloneElement(icon, {
        className: classes?.icon,
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
