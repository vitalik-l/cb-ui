import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../hooks';

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

  return React.memo(
    React.forwardRef((props: React.ComponentProps<typeof Component>, ref: any) => {
      const { className, classes: classesProp, styles: stylesProp, ...restProps } = props;
      const customProps: any = {};
      const isStyles = typeof styles === 'object';
      const classes = useStyles(isStyles ? styles : undefined, stylesProp ?? classesProp);
      let stylesToApply;
      if (isStyles && isCustomElement) {
        customProps.classes = classes;
        customProps.styles = classes;
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
    }),
  ) as any;
}
