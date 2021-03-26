import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { useControlled } from '../hooks/useControlled';

type Props = {
  classes?: {
    root?: string;
    checked?: string;
    disabled?: string;
    input?: string;
  };
  inputRef?: any;
  checkedIcon?: React.ReactNode;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = (props: Props) => {
  const { className, checked: checkedProp, defaultChecked, classes, inputRef, disabled, onChange, checkedIcon, ...inputProps } = props;
  const [value, setValue] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Radio',
  });

  const handleInputChange = (event: any) => {
    const newChecked = event.target.checked;
    setValue(newChecked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <ButtonBase
      className={clsx(classes?.root, className, value && classes?.checked, disabled && classes?.disabled)}
      component="span"
      tabIndex={null}
      role={undefined}
    >
      <input
        className={classes?.input}
        ref={inputRef}
        tabIndex={0}
        type="checkbox"
        checked={value}
        onChange={handleInputChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...inputProps}
      />
      {value && checkedIcon}
    </ButtonBase>
  );
};
