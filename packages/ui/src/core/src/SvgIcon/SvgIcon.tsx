import React from 'react';
import clsx from 'clsx';

// local files
import styles from './SvgIcon.module.scss';

export type SvgIconProps = {
  className?: string;
  size?: 'large' | 'xl';
} & React.SVGAttributes<SVGElement>;

export const SvgIcon = (props: SvgIconProps) => {
  const { className, size, ...restProps } = props;

  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(styles.root, className, size && styles[`size_${size}`])}
      {...restProps}
    />
  );
};
