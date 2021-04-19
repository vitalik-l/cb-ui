import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
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
    ...viewportProps
  } = props;

  return (
    <Viewport {...viewportProps}>
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
    </Viewport>
  );
};

DesktopLayout.defaultProps = {
  baseHeight: 1080,
  baseWidth: 1920,
  maxRatio: 21 / 9,
  minRatio: 4 / 3,
};
