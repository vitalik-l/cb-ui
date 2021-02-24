import React from 'react';
import clsx from 'clsx';

// local files
import { Item as ItemClassName } from './InfoPanel.module.scss';

type Props = {
  className?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
};

export const InfoPanelItem = (props: Props) => {
  const { className, label, children } = props;

  return (
    <div className={clsx(ItemClassName, className)}>
      <div className={`${ItemClassName}__label`}>{label}</div>
      <div className={`${ItemClassName}__content`}>{children}</div>
    </div>
  );
};
