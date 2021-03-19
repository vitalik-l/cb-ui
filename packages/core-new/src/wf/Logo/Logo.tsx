import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Logo.module.scss';

type Props = {
  small?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Logo = React.forwardRef((props: Props, ref: any) => {
  const { className, small, ...restProps } = props;

  return <div className={clsx(styles.Logo, className, {[styles.small]: small})} {...restProps} ref={ref} />;
});
