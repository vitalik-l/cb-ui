import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Chip.scss';

type Props = {
  className?: string;
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  large?: boolean;
  value?: string | number;
};

export const Chip = (props: Props) => {
  const { className, color, large, value = '' } = props;

  return (
    <div
      className={clsx(classes.Chip, className, {
        [`${classes.Chip}_color_${color}`]: !!color,
        [`${classes.Chip}_size_large`]: large,
      })}
    >
      {typeof value !== 'object' && (
        <span
          className={clsx(`${classes.Chip}-content`, {
            [`${classes.Chip}-content_font_s`]: value.toString().length > 4,
            [`${classes.Chip}-content_font_xs`]: value.toString().length > 6,
          })}
        >
          {value}
        </span>
      )}
    </div>
  );
};
