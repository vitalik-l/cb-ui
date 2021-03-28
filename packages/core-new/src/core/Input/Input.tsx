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
}

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  invalid?: boolean;
  component?: any;
  className?: string;
  fullWidth?: boolean;
  classes?: ClassesType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef((props: InputProps, ref: any) => {
  const {
    inputRef,
    placeholder,
    invalid,
    className,
    component: InputComponent,
    fullWidth,
    classes: classesProp,
    ...inputProps
  } = props;

  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, className, fullWidth && classes.fullWidth)}
      ref={ref}
    >
      <InputComponent
        className={clsx(classes.input, invalid && classes.invalid)}
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
