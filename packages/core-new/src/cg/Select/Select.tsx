import React from 'react';
import clsx from 'clsx';
import { Select as CoreSelect } from '@cb-general/core/Select';

// local files
import styles from './Select.module.scss';

type Props = {
  className?: string;
};

export const Select = (props: Props) => {
  const { className } = props;

  return <CoreSelect className={clsx(styles.Select, className)} />;
};
