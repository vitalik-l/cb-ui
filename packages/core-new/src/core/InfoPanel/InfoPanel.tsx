import React from 'react';
import clsx from 'clsx';

// local files
import { useClasses } from '../hooks/useClasses';
import styles from './CoreInfoPanel.module.scss';

type ClassesType = {
  root?: string;
  arrow_top?: string;
  arrow_bottom?: string;
  arrow_left?: string;
  arrow_right?: string;
  [key: string]: any;
};

type Props = {
  className?: string;
  children?: React.ReactNode;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  classes?: ClassesType;
};

export const InfoPanel = (props: Props) => {
  const { className, children, arrowPosition, classes: classesProp } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, classes[`arrow_${arrowPosition}`], className)}>
      {children}
    </div>
  );
};

InfoPanel.defaultProps = {
  arrowPosition: 'bottom',
};
