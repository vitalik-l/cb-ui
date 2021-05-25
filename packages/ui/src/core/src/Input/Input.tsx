import React from 'react';
import clsx from 'clsx';

// local files
import { useClasses } from '../hooks/useClasses';
import styles from './CoreInput.module.scss';

type ClassesType = {
  root?: string;
  input?: string;
  fullWidth?: string;
  invalid?: string;
  withButton?: string;
  button?: string;
};

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  invalid?: boolean;
  component?: any;
  className?: string;
  fullWidth?: boolean;
  classes?: ClassesType;
  button?: React.ReactElement;
  multiline?: boolean;
  numeric?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef((props: InputProps, ref: any) => {
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
    ...inputProps
  } = props;
  const { value, defaultValue } = inputProps;
  const InputComponent = multiline ? 'textarea' : component;
  const classes: ClassesType = useClasses(styles, classesProp);

  // allow only numeric values
  const numericKeyDownHandler = React.useCallback(
    (event: any) => {
      const key = event.key;
      const value = event.target.value;
      if (
        key.length === 1 &&
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
      )}
      ref={ref}
    >
      <InputComponent
        className={clsx(classes.input, invalid && classes.invalid)}
        ref={inputRef}
        placeholder={placeholder}
        title={value || defaultValue}
        onKeyDown={numeric ? numericKeyDownHandler : onKeyDown}
        {...inputProps}
      />
      {!!button && React.cloneElement(button, { className: classes.button })}
    </div>
  );
});

Input.defaultProps = {
  component: 'input',
};
