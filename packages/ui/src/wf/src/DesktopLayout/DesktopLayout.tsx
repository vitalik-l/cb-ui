import clsx from 'clsx';
import React from 'react';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';
import styles from './DesktopLayout.module.scss';

type Props = ViewportProps & {
  className?: string;
  header?: React.ReactElement;
  ticker?: React.ReactElement;
  chartControls?: React.ReactElement;
  chart?: React.ReactElement;
  tradingControls?: React.ReactElement;
  tabs?: React.ReactElement;
  children?: React.ReactNode;
  ViewportComponent?: React.ElementType;
};

export const DesktopLayout = (props: Props) => {
  const {
    className,
    header,
    ticker,
    chartControls,
    chart,
    tradingControls,
    tabs,
    children,
    ViewportComponent = Viewport,
    ...viewportProps
  } = props;

  return (
    <ViewportComponent {...viewportProps}>
      <div className={clsx(styles.root, className)}>
        {header}
        <div className="d-flex flex-fill">
          <div className="flex-fill d-flex column">
            <div className="flex-fill d-flex">
              {!!ticker && React.cloneElement(ticker, { className: styles.ticker })}
              <div className="flex-fill d-flex column">
                {chartControls}
                {chart}
              </div>
            </div>
            {!!tabs && React.cloneElement(tabs, { className: styles.tabs })}
          </div>
          {!!tradingControls &&
            React.cloneElement(tradingControls, { className: styles.tradingControls })}
        </div>
        {children}
      </div>
    </ViewportComponent>
  );
};

DesktopLayout.defaultProps = {
  baseHeight: 1080,
  baseWidth: 1920,
  maxRatio: 21 / 9,
  minRatio: 4 / 3,
};
