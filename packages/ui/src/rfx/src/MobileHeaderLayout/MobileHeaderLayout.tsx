import React from 'react';
import clsx from 'clsx';
import { Header } from '@cb-general/weekend/Header';

// local files
import styles from './MobileHeaderLayout.module.scss';

type Props = React.ComponentProps<'div'> & {
  clock?: React.ReactElement;
  logo?: React.ReactElement;
  userPanel?: React.ReactElement;
};

export const MobileHeaderLayout = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <Header className={clsx(styles.root, className)} {...restProps} />
  )
};
