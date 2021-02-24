import React from 'react';
import clsx from 'clsx';

// local files
import { Toast as ToastClassName } from '../styles/classes.module.scss';
import toastStyles from './Toast.module.scss';
import './Toast.scss';
import Animate from 'rc-animate';

type Props = {
  className?: string;
  children?: React.ReactNode;
  text?: string;
  color?: 'default' | 'orange';
  placementX?: 'left' | 'center' | 'right';
  placementY?: 'top' | 'bottom' | 'center';
};

export const Toast = (props: Props) => {
  const { className, children, text, color = 'default', placementX, placementY } = props;
  const content = children || text;

  return (
    <Animate transitionName={ToastClassName} transitionAppear>
      {!!content && (
        <div
          className={clsx(
            ToastClassName,
            className,
            `${ToastClassName}_vertical_${placementY} ${ToastClassName}_horizontal_${placementX}`,
          )}
          key={text || ''}
        >
          <div
            className={clsx(toastStyles.Content, {
              [`${toastStyles.Content}_color_${color}`]: !!color,
            })}
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
  placementY: 'center',
};
