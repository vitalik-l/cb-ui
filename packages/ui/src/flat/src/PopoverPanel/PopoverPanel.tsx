import clsx from 'clsx';
import React from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import styles from './FlatPopoverPanel.module.scss';

type ClassesType = {
  root?: string;
  arrowLeft?: any;
  arrowRight?: any;
};

type PopoverPanelProps = {
  className?: string;
  right?: boolean;
  classes?: ClassesType;
} & React.HTMLAttributes<HTMLDivElement>;

export const PopoverPanel: React.FC<PopoverPanelProps> = React.forwardRef(
  (props: PopoverPanelProps, ref: any) => {
    const { className, classes: classesProp, right, ...restProps } = props;
    const classes: ClassesType = useClasses(styles, classesProp);

    return (
      <div
        className={clsx(classes.root, className, {
          [classes?.arrowLeft]: !right,
          [classes?.arrowRight]: right,
        })}
        ref={ref}
        {...restProps}
      />
    );
  },
);

PopoverPanel.defaultProps = {
  classes: styles,
};
