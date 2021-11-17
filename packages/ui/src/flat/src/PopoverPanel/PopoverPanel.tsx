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
  top?: string | number;
  left?: string | number;
  zIndex?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const PopoverPanel: React.FC<PopoverPanelProps> = React.forwardRef(
  (props: PopoverPanelProps, ref: any) => {
    const {
      className,
      classes: classesProp,
      right,
      top,
      left,
      zIndex,
      style: styleProp,
      ...restProps
    } = props;
    const classes: ClassesType = useClasses(styles, classesProp);

    const style = React.useMemo(() => {
      const vars: any = {};
      if (top !== undefined) {
        vars['--FlatPopoverPanel-top'] = typeof top === 'number' ? `${top}px` : top;
      }
      if (left !== undefined) {
        vars['--FlatPopoverPanel-left'] = typeof left === 'number' ? `${left}px` : left;
      }
      if (zIndex !== undefined) {
        vars['--FlatPopoverPanel-zIndex'] = left;
      }
      return vars;
    }, [top, left, zIndex]);

    return (
      <div
        className={clsx(classes.root, className, {
          [classes?.arrowLeft]: !right,
          [classes?.arrowRight]: right,
        })}
        style={{ ...styleProp, ...style }}
        ref={ref}
        {...restProps}
      />
    );
  },
);

PopoverPanel.defaultProps = {
  classes: styles,
};
