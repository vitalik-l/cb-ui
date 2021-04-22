import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdConnectionStatus.module.scss';

type ClassesType = {
  root?: string;
  icon?: string;
  iconOnline?: string;
  labelLeft?: string;
  labelRight?: string;
  [key: string]: any;
};

type Props = {
  className?: string;
  online?: boolean;
  labelLeft?: string;
  labelRight?: string;
  classes?: ClassesType;
};

export const ConnectionStatus = (props: Props) => {
  const { className, online, labelLeft, labelRight, classes: classesProp, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)}>
      {!!labelLeft && <div className={classes.labelLeft}>{labelLeft}</div>}
      <div className={clsx(classes.icon, online && classes.iconOnline)} {...restProps} />
      {!!labelRight && (
        <div className={clsx(classes.labelRight, online ? 'text-green' : 'text-red')}>
          &nbsp;{labelRight}
        </div>
      )}
    </div>
  );
};
