import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './Dropzone.module.scss';

type ClassesType = {
  root?: string;
  selected?: string;
  label?: string;
  winner?: string;
};

type Props = React.ComponentProps<typeof ButtonBase> & {
  winner?: boolean;
  label?: string;
  classes?: ClassesType;
  betOn?: number | string;
  startNumber?: number | string;
  typeBSide?: number | string;
};

export const Dropzone = React.memo(
  React.forwardRef((props: Props, ref: any) => {
    const {
      className,
      selected,
      winner,
      label,
      children,
      classes: classesProp,
      betOn,
      startNumber,
      typeBSide,
      ...restProps
    } = props;
    const classes: ClassesType = useClasses(styles, classesProp);

    return (
      <ButtonBase
        className={clsx(classes.root, className, selected && classes.selected)}
        {...restProps}
        ref={ref}
        data-beton={betOn}
        data-startnumber={startNumber}
        data-typebside={typeBSide}
      >
        {!!label && <div className={classes.label}>{label}</div>}
        {winner && <div className={classes.winner} />}
        {children}
      </ButtonBase>
    );
  }),
);
