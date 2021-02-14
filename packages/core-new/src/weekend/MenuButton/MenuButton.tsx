import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '@cb-general/core/ButtonBase';
import classes from '../styles/classes.module.scss';
import './MenuButton.scss';

type Props = {
  className?: string;
  disabled?: boolean;
};

export const MenuButton = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <ButtonBase className={clsx(classes.MenuButton, className)} {...restProps}>
      <div />
      <div />
      <div />
    </ButtonBase>
  );
};
