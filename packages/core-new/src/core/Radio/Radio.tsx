import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { useControlled } from '../hooks/useControlled';
import { useClasses } from '../hooks/useClasses';
import styles from './CoreRadio.module.scss';

type Props = {
  classes?: {
    root?: string;
    checked?: string;
    disabled?: string;
    input?: string;
    label?: string;
  };
  inputRef?: any;
  checkedIcon?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = (props: Props) => {
  const {
    className,
    checked: checkedProp,
    defaultChecked,
    inputRef,
    disabled,
    onChange,
    icon,
    checkedIcon,
    classes: classesProp,
    children,
    ...inputProps
  } = props;
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Radio',
  });

  const handleInputChange = (event: any) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(event);
    }
  };

  const classes = useClasses(styles, classesProp);

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        className,
        checked && classes.checked,
        disabled && classes.disabled,
      )}
      component="span"
      tabIndex={null}
      role={undefined}
    >
      <input
        className={clsx(classes.input)}
        ref={inputRef}
        tabIndex={0}
        type="radio"
        checked={checkedProp}
        onChange={handleInputChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...inputProps}
      />
      {checked ? checkedIcon : icon}
      {!!children &&
        <div className={classes.label}>
          {children}
        </div>
      }
    </ButtonBase>
  );
};
