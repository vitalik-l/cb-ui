import React from 'react';
import clsx from 'clsx';

// local files
import { Overlay } from '../Overlay';
import styles from './PopoverPanel.module.scss';

type Props = {
  className?: string;
  onClose?: any;
  right?: boolean;
  classes?: any;
} & React.HTMLAttributes<HTMLDivElement>;

export const PopoverPanel = (props: Props) => {
  const { className, onClose, classes, right, ...restProps } = props;

  return (
    <Overlay onClick={onClose}>
      <div
        className={clsx(styles.PopoverPanel, className, {
          [classes.arrowLeft]: !right,
          [classes.arrowRight]: right,
        })}
        {...restProps}
      />
    </Overlay>
  );
};

PopoverPanel.defaultProps = {
  classes: styles,
}
