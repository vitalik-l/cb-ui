import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './TradeRow.module.scss';

type Props = {
  className?: string;
  noDataLabel?: string;
  children?: React.ReactNode;
};

export const TradeRow = (props: Props) => {
  const { className, noDataLabel, children } = props;

  return (
    <ButtonBase className={clsx(styles.TradeRow, className)}>
      {children || <div className={styles.noDataLabel}>{noDataLabel}</div>}
    </ButtonBase>
  );
};

TradeRow.defaultProps = {
  noDataLabel: 'no trades',
};
