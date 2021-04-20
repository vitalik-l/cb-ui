import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdChip.module.scss';

type Props = {
  className?: string;
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  large?: boolean;
  value?: string | number;
  format?: boolean;
  classes?: any;
} & React.HTMLAttributes<HTMLDivElement>;

export const Chip = React.forwardRef((props: Props, ref: any) => {
  const { className, color, large, value: valueProp = '', format = true, classes: classesProp, ...restProps } = props;
  const value: number | string = format && +valueProp >= 1000 ? `${Math.round(+valueProp / 1000)}K` : valueProp;
  const classes = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, className, {
        [classes[`color_${color}`]]: !!color,
        [classes.size_large]: large,
      })}
      ref={ref}
      {...restProps}
    >
      {typeof value !== 'object' && (
        <span
          className={clsx(classes.content, {
            [classes.font_s]: value.toString().length > 4,
            [classes.font_xs]: value.toString().length > 6,
          })}
        >
          {value}
        </span>
      )}
    </div>
  );
});
