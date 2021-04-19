import React from 'react';
import clsx from 'clsx';
import { useClasses } from '../hooks/useClasses';

type Styles<T extends React.ElementType> =
  | ((props: React.ComponentProps<T>) => string | Array<any>)
  | string
  | { [key: string]: any };

export function styled<T extends React.ElementType>(
  styles: Styles<T>,
): React.FunctionComponent<React.ComponentProps<'div'>>;
export function styled<T extends React.ElementType>(
  Component: T,
  styles: Styles<T>,
): React.FunctionComponent<React.ComponentProps<T>>;
export function styled(...args: any) {
  let styles: any,
    Component: React.ElementType = 'div';

  if (args.length > 1) {
    [Component, styles] = args;
  } else {
    styles = args[0];
  }

  return React.forwardRef((props: React.ComponentProps<typeof Component>, ref: any) => {
    const { className, classes: classesProp, ...restProps } = props;
    const customProps: any = {};
    const isClasses = typeof styles === 'object';
    const classes = useClasses(isClasses ? styles : undefined, classesProp);
    let stylesToApply;
    if (isClasses) {
      customProps.classes = classes;
    } else {
      stylesToApply = typeof styles === 'function' ? styles(props) : styles;
    }

    return (
      <Component
        className={clsx(stylesToApply, className)}
        {...customProps}
        {...restProps}
        ref={ref}
      />
    );
  }) as any;
}
