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

type Props = React.ComponentProps<'div'> & {
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  classes?: ClassesType;
};

export const InfoPanel: React.FC<Props> = (props) => {
  const { className, arrowPosition, classes: classesProp, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, classes[`arrow_${arrowPosition}`], className)}
      {...restProps}
    />
  );
};

InfoPanel.defaultProps = {
  arrowPosition: 'bottom',
};
