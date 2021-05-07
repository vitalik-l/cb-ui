import React from 'react';
import clsx from 'clsx';
import { Panel } from '@cb-general/weekend/Panel';

// local
import styles from './TradingControlsLayout.module.scss';

type Props = React.ComponentProps<typeof Panel> & {
  ticker?: React.ReactElement;
  circularIndicator?: React.ReactElement;
  countdown?: React.ReactElement;
  connectionStatus?: React.ReactElement;
};

const countdownStyles = {
  root: styles.countdownWrap,
  countdown: styles.countdown,
};

export const TradingControlsLayout = (props: Props) => {
  const { ticker, className, children, circularIndicator, countdown, ...restProps } = props;

  return (
    <Panel className={clsx(className, styles.root)} {...restProps}>
      {!!ticker && React.cloneElement(ticker, { className: styles.ticker })}
      <div className={styles.bottom}>
        {!!circularIndicator &&
          React.cloneElement(circularIndicator, { className: styles.circularIndicator })}
        {!!countdown && React.cloneElement(countdown, { classes: countdownStyles })}
        {children}
      </div>
    </Panel>
  );
};
