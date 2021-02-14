import React from 'react';
import clsx from 'clsx';

// local files
import {
  TradingPanel,
  TradingPanelProps,
  TradingPanelHeader,
  TradingPanelContent,
  tradingPanelStyles,
} from '../TradingPanel';

type Props = {
  className?: string;
  symbol?: React.ReactElement;
  slider?: React.ReactNode;
  pipInfo?: React.ReactNode;
  select?: React.ReactElement;
  buttons?: React.ReactNode;
} & TradingPanelProps;

export const TradingPanelLayout = (props: Props) => {
  const { symbol, slider, pipInfo, select, buttons, active, ...tradingPanelProps } = props;

  return (
    <TradingPanel active={active} {...tradingPanelProps}>
      <TradingPanelHeader>{!!symbol && React.cloneElement(symbol, { active })}</TradingPanelHeader>
      <TradingPanelContent>
        <div className="d-flex justify-between">
          <div className="flex-fill">{slider}</div>
          {!!pipInfo && <div className={tradingPanelStyles.Separator} />}
          {pipInfo}
        </div>
        <div className={tradingPanelStyles.Buttons}>
          {buttons}
          {!!select &&
            React.cloneElement(select, {
              className: clsx(select.props.className, tradingPanelStyles.Select),
            })}
        </div>
      </TradingPanelContent>
    </TradingPanel>
  );
};
