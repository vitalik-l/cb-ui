import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Dropzones.module.scss';

type Props = React.ComponentProps<'div'>;

export const Dropzones = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <div className={styles.center} />
      {children}
    </div>
  );
};
