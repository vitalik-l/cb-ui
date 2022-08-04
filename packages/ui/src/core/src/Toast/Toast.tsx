import clsx from 'clsx';
import Animate from 'rc-animate';
import React from 'react';
import { useClasses } from '../hooks/useClasses';
import defaultStyles from './CoreToast.module.scss';

type ClassesType = {
  root?: string;
  content?: string;
  [key: string]: any;
};

type Props = {
  className?: string;
  children?: React.ReactNode;
  text?: string;
  color?: 'default' | 'success' | 'danger' | 'warning' | 'info';
  placementX?: 'left' | 'center' | 'right';
  placementY?: 'top' | 'bottom' | 'center';
  classes?: ClassesType;
  styles?: ClassesType;
  transitionName?: string;
} & React.ComponentProps<'div'>;

export const Toast = (props: Props) => {
  const {
    className,
    children,
    text,
    color = 'default',
    placementX,
    placementY,
    classes: classesProp,
    styles,
    transitionName,
    ...restProps
  } = props;
  const content = children || text;
  const classes: ClassesType = useClasses(defaultStyles, styles ?? classesProp);

  return (
    <Animate transitionName={classes.animate || transitionName} transitionAppear>
      {!!content && (
        <div
          className={clsx(
            classes.root,
            className,
            classes[`vertical_${placementY}`],
            classes[`horizontal_${placementX}`],
          )}
          key={text || ''}
        >
          <div
            className={clsx(classes.content, !!color && classes[`color_${color}`])}
            {...restProps}
          >
            {content}
          </div>
        </div>
      )}
    </Animate>
  );
};

Toast.defaultProps = {
  placementX: 'center',
  placementY: 'top',
};
