import React from 'react';
import clsx from 'clsx';
import { useClasses } from '../hooks/useClasses';

type Styles<T> = ((props: T) => Array<any>) | string | { [key: string]: any };

export function styled<T>(
  styles: Styles<T>,
): React.FunctionComponent<React.ComponentProps<'div'> & T>;
export function styled<Props, T extends React.ElementType>(
  Component: T,
  styles: Styles<React.ComponentProps<T> & Props>,
): React.FunctionComponent<React.ComponentProps<T> & Props>;
export function styled(...args: any) {
  const [Component, styles] = args.length === 1 ? ['div', args[0]] : args;
  const isCustomElement = typeof Component !== 'string';

  return React.forwardRef((props: React.ComponentProps<typeof Component>, ref: any) => {
    const { className, classes: classesProp, ...restProps } = props;
    const customProps: any = {};
    const isClasses = typeof styles === 'object';
    const classes = useClasses(isClasses ? styles : undefined, classesProp);
    let stylesToApply;
    if (isClasses && isCustomElement) {
      customProps.classes = classes;
    } else {
      stylesToApply = typeof styles === 'function' ? clsx(...styles(props)) : styles;
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
