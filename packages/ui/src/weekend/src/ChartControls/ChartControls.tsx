import React from 'react';
import clsx from 'clsx';
// local files
import styles from './WkdChartControls.module.scss';

type Props = React.ComponentProps<'div'> & {
  alignRight?: boolean;
};

export const ChartControls = (props: Props) => {
  const { alignRight, className, ...restProps } = props;

  return (
    <div className={clsx(className, styles.root, alignRight && styles.alignRight)} {...restProps} />
  );
};
