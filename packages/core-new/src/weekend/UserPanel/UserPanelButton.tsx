import React from 'react';
import clsx from 'clsx';

// local files
import { Button } from '../Button';
import classes from '../styles/classes.module.scss';

type Props = {
  component: React.ElementType;
  className?: string;
  cropLeft?: boolean;
  children?: React.ReactNode;
};

export const UserPanelButton = (props: Props) => {
  const { component, className, cropLeft, ...restProps } = props;
  const Component = component;

  return (
    <Component
      className={clsx(`${classes.UserPanel}-button`, className, {
        [`${classes.UserPanel}-button--crop-left`]: cropLeft,
      })}
      {...restProps}
    />
  );
};

UserPanelButton.defaultProps = {
  component: Button,
};
