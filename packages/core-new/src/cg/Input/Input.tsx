import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Input.module.scss';

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  invalid?: boolean;
  component?: any;
  className?: string;
  fullWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

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
      className={clsx(styles.Input, className, {
        [styles.fullWidth]: !!fullWidth,
      })}
      ref={ref}
    >
      <InputComponent
        className={clsx(styles.inputItem, {
          [styles.invalid]: invalid,
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
