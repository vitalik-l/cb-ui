import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdSelect.module.scss';

type Props = {
  className?: string;
  invalid?: boolean;
  fullWidth?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef((props: Props, ref: any) => {
  const { className, disabled, invalid, fullWidth, ...selectOptions } = props;

  return (
    <div
      className={clsx(styles.root, className, {
        [styles.disabled]: disabled,
        [styles.invalid]: invalid,
        [styles.fullWidth]: fullWidth,
      })}
      ref={ref}
    >
      <select className={styles.select} disabled={disabled} {...selectOptions} />
      <svg
        className={styles.icon}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  );
});
