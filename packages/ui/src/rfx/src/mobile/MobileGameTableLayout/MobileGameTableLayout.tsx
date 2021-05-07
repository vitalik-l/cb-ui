import React from 'react';
import clsx from 'clsx';
import Animate from 'rc-animate';

// local files
import styles from './MobileGameTableLayout.module.scss';

type Props = React.ComponentProps<'div'> & {
  rouletteWheel?: React.ReactElement;
  chips?: React.ReactElement;
  gameRounds?: React.ReactElement;
  buttons?: React.ReactElement;
  autoplayCounter?: React.ReactElement;
  logo?: React.ReactElement;
  chartModeDropzones?: React.ReactElement;
  chartMode?: boolean;
};

export const MobileGameTableLayout = (props: Props) => {
  const {
    className,
    rouletteWheel,
    chips,
    gameRounds,
    buttons,
    autoplayCounter,
    logo,
    chartMode,
    chartModeDropzones,
    ...restProps
  } = props;

  return (
    <div className={clsx(styles.root, className, chartMode && styles.chartMode)} {...restProps}>
      {!!logo && <div className={styles.logoWrap}>{logo}</div>}
      <div className={styles.gameTableWrap}>
        <div className={styles.gameTable}>
          <div className={styles.topContent}>
            {!!chips && (
              <div className={styles.chipsWrap}>
                {React.cloneElement(chips, { className: styles.chips })}
              </div>
            )}
            <div className={styles.rouletteWheel}>
              {rouletteWheel}
              {!!autoplayCounter && <div className={styles.autoplayCounter}>{autoplayCounter}</div>}
            </div>
          </div>
          <div className={styles.bottomContent}>
            {!!chartModeDropzones && (
              <Animate transitionName="chartModeDropzonesAnim" transitionAppear>
                {chartMode && <div className={styles.chartModeDropzones}>{chartModeDropzones}</div>}
              </Animate>
            )}
            {!!gameRounds &&
              React.cloneElement(gameRounds, { className: styles.gameRounds, reversed: true })}
            {!!buttons && <div className={styles.buttons}>{buttons}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
