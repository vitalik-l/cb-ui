import clsx from 'clsx';
import React from 'react';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';
import { useStyles } from '@cb-general/core/hooks';
import baseStyles from './DesktopLayout.module.scss';

type Styles = {
  root?: string;
  mainContent?: string;
  gameTable?: string;
  tabs?: string;
  tradingControls?: string;
};

type Props = ViewportProps & {
  className?: string;
  header?: React.ReactElement;
  ticker?: React.ReactElement;
  chartControls?: React.ReactElement;
  chart?: React.ReactElement;
  tradingControls?: React.ReactElement;
  tabs?: React.ReactElement;
  children?: React.ReactNode;
  gameTable?: React.ReactElement;
  styles?: Styles;
};

const breakpoint = (width: number, height: number) => {
  if (height < 830 || width < 1380) {
    return;
  } else if (height < 880 || width < 1480) {
    return 8;
  } else if (height < 930 || width < 1550) {
    return 8.5;
  } else if (height < 985 || width < 1640) {
    return 9;
  } else if (height < 1030 || width < 1750) {
    return 9.5;
  }
  return 10;
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
    gameTable,
    styles: stylesProp,
    ...viewportProps
  } = props;
  const styles = useStyles(baseStyles, stylesProp);

  return (
    <Viewport breakpoint={breakpoint} {...viewportProps}>
      <div className={clsx(styles.root, className)}>
        {header}
        <div className="d-flex flex-fill">
          <div className={styles.mainContent}>
            {!!gameTable && <span className={styles.gameTable}>{gameTable}</span>}
            <div className="flex-fill d-flex column">
              {chartControls}
              {chart}
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
