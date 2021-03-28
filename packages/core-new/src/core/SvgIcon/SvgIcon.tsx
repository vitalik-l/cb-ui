import React from 'react';
import clsx from 'clsx';

// local files
import styles from './SvgIcon.module.scss';

export type SvgIconProps = {
  className?: string;
} & React.SVGAttributes<SVGElement>;

export const SvgIcon = (props: SvgIconProps) => {
  const { className, ...restProps } = props;

  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(styles.root, className)}
      {...restProps}
    />
  );
};
