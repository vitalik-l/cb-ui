import React from 'react';
import clsx from 'clsx';
import Animate from 'rc-animate';

// local files
import styles from './WkdToast.module.scss';

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
    <Animate transitionName={styles.root} transitionAppear>
      {!!content && (
        <div
          className={clsx(
            styles.root,
            className,
            styles[`vertical_${placementY}`],
            styles[`horizontal_${placementX}`],
          )}
          key={text || ''}
        >
          <div
            className={clsx(styles.content, {
              [styles[`color_${color}`]]: !!color,
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
  placementY: 'top',
};
