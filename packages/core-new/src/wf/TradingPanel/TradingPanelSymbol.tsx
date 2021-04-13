import React from 'react';
import clsx from 'clsx';

// local files
import { tradingPanelStyles } from './index';

type Props = {
  className?: string;
  active?: boolean;
  symbol?: string;
};

export const TradingPanelSymbol = (props: Props) => {
  const { className, active, symbol } = props;
  const [labelLeft, labelRight] = symbol?.split('/') || [];

  return (
    <div className={clsx(tradingPanelStyles.symbol, className)}>
      <span className={clsx({ 'text-red': active })}>{labelLeft}</span>
      <div className={tradingPanelStyles.separator} />
      <span className={clsx({ 'text-green': active })}>{labelRight}</span>
    </div>
  );
};
