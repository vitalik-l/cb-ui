import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Select.scss';

type Props = {
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = (props: Props) => {
  const { className, disabled, ...selectOptions } = props;

  return (
    <div
      className={clsx(classes.Select, className, {
        [`${classes.Select}_disabled`]: disabled,
      })}
    >
      <select className={`${classes.Select}-item`} disabled={disabled} {...selectOptions} />
      <svg
        className={`${classes.Select}-icon`}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  );
};
