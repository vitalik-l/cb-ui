import clsx from 'clsx';
import React from 'react';
import styles from './PrefixComponentName.module.scss';

type Props = React.ComponentProps<'div'>;

export const ComponentName = (props: Props) => {
  const { className, ...restProps } = props;

  return <div className={clsx(styles.root, className)} {...restProps} />;
};
