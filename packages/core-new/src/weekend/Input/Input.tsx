import React from 'react';
import clsx from 'clsx';

// local files
import inputStyles from './Input.module.scss';
import './Input.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
  label?: string;
  placeholder?: string;
  error?: string;
  component?: any;
  className?: string;
}

export const Input = React.forwardRef((props: InputProps, ref: any) => {
  const {
    inputRef,
    label,
    placeholder,
    error,
    className,
    component: InputComponent,
    ...inputProps
  } = props;

  return (
    <div className={clsx(inputStyles.Root, className)} ref={ref}>
      {label && <label className={inputStyles.Label}>{label}</label>}
      <InputComponent
        className={clsx(inputStyles.Input, {
          [`${inputStyles.Input}_invalid`]: error,
        })}
        ref={inputRef}
        placeholder={placeholder}
        {...inputProps}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
});

Input.defaultProps = {
  component: 'input',
};
