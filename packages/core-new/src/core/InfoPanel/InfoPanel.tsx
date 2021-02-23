import React from 'react';
import clsx from 'clsx';

// local files
import { InfoPanel as RootClassName } from '../styles/classes.module.scss';
import './InfoPanel.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
};

export const InfoPanel = (props: Props) => {
  const { className, children, arrowPosition } = props;

  return (
    <div className={clsx(RootClassName, `${RootClassName}_arrow_${arrowPosition}`, className)}>
      {children}
    </div>
  );
};

InfoPanel.defaultProps = {
  arrowPosition: 'bottom',
}
