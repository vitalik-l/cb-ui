import React from 'react';
import clsx from 'clsx';
import { Panel } from '@cb-general/weekend/Panel';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './MobileChartControls.module.scss';

type Props = React.ComponentProps<'div'> & {
  onToggle?: any;
};

export const ChartControls = (props: Props) => {
  const { className, children, onToggle, ...restProps } = props;

  return (
    <Panel className={clsx(styles.root, className)} {...restProps}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>{children}</div>
      </div>
      <ButtonBase className={styles.toggleButton} onClick={onToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.81 36.36"
          width={40}
          height={40}
          className={styles.toggleButtonIcon}
        >
          <g fill="currentcolor">
            <path
              d="M23.71,19.62,12,36.36C7.67,30.3,3.89,25,.11,19.63Z"
              style={{ fill: '#f80b0b' }}
            />
            <path d="M0,16.16,11.91,0l11.9,16.17Z" style={{ fill: '#07f907' }} />
          </g>
        </svg>
      </ButtonBase>
    </Panel>
  );
};
