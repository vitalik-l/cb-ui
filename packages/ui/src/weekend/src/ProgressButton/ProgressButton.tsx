import clsx from 'clsx';
import React from 'react';
import { useStyles } from '@cb-general/core/hooks';
import { Button } from '../Button';
import baseStyles from './WkdProgressButton.module.scss';

type Colors = 'red' | 'green';
type ColorClasses = { [key in `color_${Colors}`]?: string };

type Styles = {
  root?: string;
  bg?: string;
  progress?: string;
} & ColorClasses;

type Props = {
  styles?: Styles;
  className?: string;
  disabled?: boolean;
  color?: Colors;
  label?: string;
  progress?: number;
};

export const ProgressButton = (props: Props) => {
  const { className, color, label, progress, styles: stylesProp, ...otherProps } = props;
  const styles = useStyles(baseStyles, stylesProp);
  const colorClass = `color_${color}` as keyof ColorClasses;

  return (
    <Button className={clsx(styles.root, className)} data-label={label} square {...otherProps}>
      {label}
      <span className={clsx(styles.bg, !!color && styles[colorClass])} />
      <span className={styles.progress} style={{ transform: `translateX(${progress}%)` }} />
    </Button>
  );
};

ProgressButton.defaultProps = {
  color: 'green',
};
