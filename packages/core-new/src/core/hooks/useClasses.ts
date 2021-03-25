import React from 'react';
import clsx from 'clsx';

type Props = {
  classes?: any;
  classNamePrefix?: string;
};

export const useClasses = <T>(values: T, props: Props): { root: string } & T => {
  const { classes: classesProp, classNamePrefix } = props;

  const { current: classes } = React.useRef(
    Object.keys(values).reduce(
      (result, current) => {
        const className = (values as any)[current];
        result[current] = clsx(classesProp?.[current], {
          [`${classNamePrefix}${className}`]: classNamePrefix,
        });
        return result;
      },
      {
        ...classesProp,
        root: clsx(classNamePrefix, classesProp?.root),
      },
    ),
  );

  return classes;
};
