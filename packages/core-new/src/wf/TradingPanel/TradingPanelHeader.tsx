import React from 'react';

// local files
import tradingPanelStyles from './TradingPanel.module.scss';

export const TradingPanelHeader = (props: any) => {
  const { children } = props;

  return (
    <div className="d-flex">
      <div className={tradingPanelStyles.Header}>{children}</div>
    </div>
  );
};
