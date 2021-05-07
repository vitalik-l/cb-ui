import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { TrendDownIcon } from '@cb-general/icons/TrendDownIcon';
import { TrendUpIcon } from '@cb-general/icons/TrendUpIcon';

// local files
import styles from './ChartModeDropzone.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  type?: 'up' | 'down' | 'tie';
  label?: string;
  sublabel?: string;
  nthChild?: 'first' | 'last';
};

export const ChartModeDropzone = React.forwardRef((props: Props, ref: any) => {
  const { className, label, type, children, sublabel, nthChild = 'first', ...restProps } = props;
  const Icon = type === 'down' ? TrendDownIcon : TrendUpIcon;

  return (
    <ButtonBase
      className={clsx(styles.root, className, !!type && styles[type], styles[`child_${nthChild}`])}
      {...restProps}
      ref={ref}
    >
      <Icon className={styles.icon} />
      <div className={styles.text}>
        {!!label && <div className={styles.label}>{label}</div>}
        {!!sublabel && <div className={styles.sublabel}>{sublabel}</div>}
      </div>
      <div className={styles.chips}>{children}</div>
    </ButtonBase>
  );
});

ChartModeDropzone.defaultProps = {
  type: 'down',
};
