import React from 'react';
import clsx from 'clsx';

// local files
import { Button } from '../Button';
import styles from './WkdUserPanelButton.module.scss';

type Props = {
  component?: React.ElementType;
  className?: string;
  cropLeft?: boolean;
  children?: React.ReactNode;
};

export const UserPanelButton = (props: Props) => {
  const { component, className, cropLeft, ...restProps } = props;
  const Component = component as React.ElementType;

  return (
    <Component
      className={clsx(styles.root, className, {
        [styles.cropLeft]: cropLeft,
      })}
      {...restProps}
    />
  );
};

UserPanelButton.defaultProps = {
  component: Button,
};
