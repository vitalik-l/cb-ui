import React from 'react';
import clsx from 'clsx';

// local files
import inputStyles from './Input.module.scss';
import './Input.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  invalid?: boolean;
  component?: any;
  className?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef((props: InputProps, ref: any) => {
  const {
    inputRef,
    placeholder,
    invalid,
    className,
    component: InputComponent,
    fullWidth,
    ...inputProps
  } = props;

  return (
    <div
      className={clsx(inputStyles.Root, className, {
        [`${inputStyles.Root}_fullWidth`]: !!fullWidth,
      })}
      ref={ref}
    >
      <InputComponent
        className={clsx(inputStyles.Input, {
          [`${inputStyles.Input}_invalid`]: invalid,
        })}
        ref={inputRef}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
});

Input.defaultProps = {
  component: 'input',
};
