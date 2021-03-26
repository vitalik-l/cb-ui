import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './Radio.module.scss';
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
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Radio',
  });

  const handleInputChange = (event: any) => {
    const newChecked = event.target.checked;
    console.log(newChecked);
    setChecked(newChecked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <ButtonBase
      className={clsx(styles.Radio, classes?.root, className, checked && classes?.checked, disabled && classes?.disabled)}
      component="span"
      tabIndex={null}
      role={undefined}
    >
      <input
        className={clsx(styles.input, classes?.input)}
        ref={inputRef}
        tabIndex={0}
        type="radio"
        checked={checkedProp}
        onChange={handleInputChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...inputProps}
      />
      {checked && checkedIcon}
    </ButtonBase>
  );
};
