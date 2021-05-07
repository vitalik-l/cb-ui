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
          <div className="flex-fill d-flex">
            <div className={styles.chartContainer}>
              <div className="chart" />
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
            <div className={styles.tradingControls}>{tradingControls}</div>
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
  baseHeight: 449,
  minRatio: 4 / 3,
  maxRatio: 21 / 9,
};
