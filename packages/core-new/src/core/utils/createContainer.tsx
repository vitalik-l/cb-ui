import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const createContainer = (containerClassName: string, Component: any = 'div') => (
  props: Props,
) => {
  const { className, ...restProps } = props;
  return <Component className={clsx(containerClassName, className)} {...restProps} />;
};
