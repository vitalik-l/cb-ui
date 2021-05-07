import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChartModeDropzones.module.scss';

type Props = React.ComponentProps<'div'>;

export const ChartModeDropzones = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { className: styles.child }),
      )}
    </div>
  );
};
