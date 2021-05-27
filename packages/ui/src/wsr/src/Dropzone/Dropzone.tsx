import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './Dropzone.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  winner?: boolean;
  label?: string;
};

export const Dropzone = React.memo(
  React.forwardRef((props: Props, ref: any) => {
    const { className, selected, winner, label, children, ...restProps } = props;

    return (
      <ButtonBase
        className={clsx(
          styles.root,
          className,
          selected && styles.selected,
        )}
        {...restProps}
        ref={ref}
      >
        {!!label && <div className={styles.label}>{label}</div>}
        {winner && <div className={styles.winner} />}
        {children}
      </ButtonBase>
    );
  }),
);
