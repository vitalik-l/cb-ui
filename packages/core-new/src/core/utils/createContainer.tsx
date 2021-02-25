import React from 'react';
import clsx from 'clsx';

export const createContainer = (containerClassName: string, Component: any = 'div') =>
  React.forwardRef((props: any, ref: any) => {
    const { className, ...restProps } = props;
    return <Component className={clsx(containerClassName, className)} {...restProps} ref={ref} />;
  });
