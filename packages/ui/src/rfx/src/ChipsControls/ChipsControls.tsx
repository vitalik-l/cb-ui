import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChipsControls.module.scss';

type Props = React.ComponentProps<'div'>;

export const ChipsControls = (props: Props) => {
  const { className, ...restProps } = props;

  return <div className={clsx(styles.root, className)} {...restProps} />;
};
