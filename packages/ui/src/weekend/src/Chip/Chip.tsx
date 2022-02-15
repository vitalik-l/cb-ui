import clsx from 'clsx';
import React from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import styles from './WkdChip.module.scss';

type Props = {
  className?: string;
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  large?: boolean;
  value?: string | number;
  format?: boolean;
  classes?: any;
  children?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

const nFormatter = (num: number | string, digits = 1) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item ? (+num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const Chip = React.forwardRef((props: Props, ref: any) => {
  const {
    className,
    color,
    large,
    value: valueProp = '',
    format = true,
    classes: classesProp,
    children,
    ...restProps
  } = props;
  const content = children || valueProp;
  const value: number | string = format && +content >= 1000 ? nFormatter(content) : content;
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
