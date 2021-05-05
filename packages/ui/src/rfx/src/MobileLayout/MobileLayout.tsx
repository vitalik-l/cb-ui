import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
import styles from './MobileLayout.module.scss';

type Props = ViewportProps & {

};

export const MobileLayout = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <Viewport className={clsx(styles.root, className)} {...restProps} />
  );
};

MobileLayout.defaultProps = {
  baseFontSize: 6.5,
  baseWidth: 798,
  baseHeight: 449,
  minRatio: 4/3,
  maxRatio: 21/9,
}