import React from 'react';
import clsx from 'clsx';
import {useClasses} from '@cb-general/core/hooks/useClasses';

// local files
import { Overlay } from '../Overlay';
import styles from './FlatPopoverPanel.module.scss';

type ClassesType = {
  root?: string;
  arrowLeft?: any;
  arrowRight?: any;
};

type Props = {
  className?: string;
  onClose?: any;
  right?: boolean;
  classes?: ClassesType;
} & React.HTMLAttributes<HTMLDivElement>;

export const PopoverPanel = (props: Props) => {
  const { className, onClose, classes: classesProp, right, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <Overlay onClick={onClose}>
      <div
        className={clsx(classes.root, className, {
          [classes?.arrowLeft]: !right,
          [classes?.arrowRight]: right,
        })}
        {...restProps}
      />
    </Overlay>
  );
};

PopoverPanel.defaultProps = {
  classes: styles,
};
