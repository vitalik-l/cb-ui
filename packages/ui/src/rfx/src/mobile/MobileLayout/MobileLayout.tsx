import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
import styles from './MobileLayout.module.scss';

type Props = ViewportProps & {
  header?: React.ReactElement;
  chartControls?: React.ReactElement;
  gameTable?: React.ReactElement;
  tradingControls?: React.ReactElement;
  menu?: React.ReactElement;
  chart?: React.ReactElement;
  view?: React.ReactElement;
  menuOpen?: boolean;
  onCloseMenu?: any;
};

export const MobileLayout = (props: Props) => {
  const {
    className,
    header,
    chartControls,
    gameTable,
    children,
    tradingControls,
    menu,
    menuOpen,
    onCloseMenu,
    chart,
    view,
    ...restProps
  } = props;
  const [controlsToggled, setControlsToggled] = React.useState(false);

  const onControlsToggle = () => {
    setControlsToggled(!controlsToggled);
  };

  return (
    <Viewport className={clsx(styles.root, className, menuOpen && styles.menuOpen)} {...restProps}>
      <div className={styles.transform}>
        <div className={styles.mainContent}>
          {!!header && React.cloneElement(header, { className: styles.header })}
          <div className={styles.content}>
            <div className={styles.chartContainer}>
              {!!chart && <div className={styles.chart}>{chart}</div>}
              <div
                className={clsx(
                  styles.gameTableAndControls,
                  controlsToggled && styles.controlsToggled,
                )}
              >
                {!!chartControls &&
                  React.cloneElement(chartControls, { onToggle: onControlsToggle })}
                <div className={styles.gameTable}>{gameTable}</div>
              </div>
            </div>
            {!!tradingControls && <div className={styles.tradingControls}>{tradingControls}</div>}
            {!!view && <div className={styles.view}>{view}</div>}
          </div>
        </div>
        {!!menu && <div className={styles.menu}>{menu}</div>}
        <div className={styles.menuOverlay} onClick={onCloseMenu} />
        {children}
      </div>
    </Viewport>
  );
};

MobileLayout.defaultProps = {
  baseFontSize: 6.5,
  baseWidth: 798,
  baseHeight: 400,
  minRatio: 4 / 3,
  maxRatio: 21 / 9,
};
