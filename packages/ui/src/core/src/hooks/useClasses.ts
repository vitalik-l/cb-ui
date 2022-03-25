import clsx from 'clsx';
import React from 'react';

type Props = {
  classes?: any;
  classNamePrefix?: string;
};

export const useClassesByPrefix = <T>(
  values: T,
  props: Props,
): { root: string; [key: string]: any } & T => {
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

const getClasses = (defaultStyles: any, classesProp: any = {}): any => {
  if (!defaultStyles) return {};
  const keys = Array.from(new Set([...Object.keys(classesProp), ...Object.keys(defaultStyles)]));
  return keys.reduce((result: { [key: string]: any }, current) => {
    result[current] = clsx(classesProp?.[current], defaultStyles?.[current]);
    return result;
  }, {});
};

export const useClasses = <T = {}>(defaultStyles?: {}, classesProp?: T): T => {
  return React.useMemo(() => getClasses(defaultStyles, classesProp), []); //eslint-disable-line
};

export const useStyles = <T = {}>(defaultStyles?: {}, styles?: T): T => {
  return React.useMemo(() => getClasses(defaultStyles, styles), []); //eslint-disable-line
};
