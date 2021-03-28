import React from 'react';
import clsx from 'clsx';

// local files
import { useClasses } from '../hooks/useClasses';
import styles from './CoreInfoPanelItem.module.scss';

type ClassesProp = {
  root?: string;
  label?: string;
  content?: string;
};

type Props = {
  className?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
  classes?: ClassesProp;
};

export const InfoPanelItem = (props: Props) => {
  const { className, label, children, classes: classesProp } = props;
  const classes: ClassesProp = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.label}>{label}</div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
