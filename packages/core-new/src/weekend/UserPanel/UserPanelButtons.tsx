import React from 'react';
import clsx from 'clsx';
// local
import styles from './WkdUserPanelButtons.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export const UserPanelButtons = (props: Props) => {
  const { className, children, disabled } = props;

  const childrenItems = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, ...childProps } = child.props;

    return React.cloneElement(child, {
      disabled,
      className: clsx(styles.child, childClassName),
      ...childProps,
    });
  });

  return <div className={clsx(styles.root, className)}>{childrenItems}</div>;
};
