import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdSelect.module.scss';

type ClassesType = {
  root?: string;
  disabled?: string;
  invalid?: string;
  fullWidth?: string;
  select?: string;
  icon?: string;
  [key: string]: any;
};

type Props = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  input?: React.ReactElement;
  classes?: ClassesType;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef((props: Props, ref: any) => {
  const { className, disabled, invalid, fullWidth, input, classes: classesProp, ...selectOptions } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, className,
        disabled && classes.disabled,
        invalid && classes.invalid,
        fullWidth && classes.fullWidth,
      )}
      ref={ref}
    >
      {input}
      <select className={classes.select} disabled={disabled} {...selectOptions} />
      <svg className={classes.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  );
});