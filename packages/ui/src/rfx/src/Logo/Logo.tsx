import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Logo.module.scss';

type Props = {
  small?: boolean;
  glow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Logo = React.forwardRef((props: Props, ref: any) => {
  const { className, small, glow, ...restProps } = props;

  return (
    <div
      className={clsx(styles.root, className, { [styles.small]: small }, glow && styles.glow)}
      {...restProps}
      ref={ref}
    />
  );
});
