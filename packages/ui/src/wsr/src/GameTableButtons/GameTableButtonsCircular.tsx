import React from 'react';
import clsx from 'clsx';

// local
import styles from './GameTableButtons.module.scss';

type Props<T extends React.ElementType> = {
  Component?: T;
} & React.ComponentProps<T>;

export const GameTableButtonsCircular = <T extends React.ElementType>({
  Component,
  className,
  ...restProps
}: Props<T>) => {
  return (
    <div className={clsx(className, styles.circularWrap)}>
      <Component className={styles.circular} {...restProps} />
    </div>
  );
};
