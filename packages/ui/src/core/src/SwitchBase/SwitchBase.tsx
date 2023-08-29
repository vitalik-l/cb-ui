import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '../ButtonBase';
import { useClasses } from '../hooks/useClasses';
import { useControlled } from '../hooks/useControlled';
import defaultStyles from './SwitchBase.module.scss';

type Classes = {
  root?: string;
  checked?: string;
  disabled?: string;
  input?: string;
  label?: string;
};

type Props = {
  classes?: Classes;
  styles?: Classes;
  LabelComponent?: React.ElementType;
  inputRef?: any;
  checkedIcon?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SwitchBase = (props: Props) => {
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
    styles,
    children,
    LabelComponent = 'label',
    id,
    label,
    ...inputProps
  } = props;
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
  });
  const displayLabel = label ?? children;

  const handleInputChange = (event: any) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(event);
    }
  };

  const classes = useClasses(defaultStyles, styles ?? classesProp);

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
        id={id}
        {...inputProps}
      />
      {checked ? checkedIcon : icon}
      {!!displayLabel && (
        <LabelComponent className={classes.label} htmlFor={id}>
          {displayLabel}
        </LabelComponent>
      )}
    </ButtonBase>
  );
};
