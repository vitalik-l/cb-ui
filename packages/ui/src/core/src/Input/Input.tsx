import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../hooks';
import defaultStyles from './CoreInput.module.scss';

type ClassesType = {
  root?: string;
  input?: string;
  fullWidth?: string;
  invalid?: string;
  withButton?: string;
  button?: string;
  disabled?: string;
};

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  invalid?: boolean;
  component?: any;
  className?: string;
  fullWidth?: boolean;
  classes?: ClassesType;
  styles?: ClassesType;
  button?: React.ReactElement;
  multiline?: boolean;
  numeric?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = React.forwardRef((props: InputProps, ref: any) => {
  const {
    inputRef,
    placeholder,
    invalid,
    className,
    component,
    fullWidth,
    classes: classesProp,
    button,
    multiline,
    numeric = false,
    onKeyDown,
    styles,
    disabled,
    ...inputProps
  } = props;
  const { value, defaultValue } = inputProps;
  const InputComponent = multiline ? 'textarea' : component;
  const classes: ClassesType = useStyles(defaultStyles, styles ?? classesProp);

  // allow only numeric values
  const numericKeyDownHandler = React.useCallback(
    (event: any) => {
      const key = event.key;
      const value = event.target.value;
      if (
        key?.length === 1 &&
        ((key === '.' && (value.indexOf('.') !== -1 || !value.length)) || !/^[0-9.]/.test(key))
      ) {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [onKeyDown],
  );

  return (
    <div
      className={clsx(
        classes.root,
        className,
        fullWidth && classes.fullWidth,
        !!button && classes.withButton,
        disabled && classes.disabled,
      )}
      ref={ref}
    >
      <InputComponent
        className={clsx(classes.input, invalid && classes.invalid)}
        ref={inputRef}
        placeholder={placeholder}
        title={value || defaultValue}
        onKeyDown={numeric ? numericKeyDownHandler : onKeyDown}
        disabled={disabled}
        {...inputProps}
      />
      {!!button && React.cloneElement(button, { className: classes.button })}
    </div>
  );
});

Input.defaultProps = {
  component: 'input',
};
