import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import { BetObject } from './types';
import styles from './DropzoneBase.module.scss';

type ClassesType = {
  root?: string;
  selected?: string;
  label?: string;
  winner?: string;
  winnerNumber?: string;
  hover?: string;
};

type Props = React.ComponentProps<typeof ButtonBase> & {
  winner?: boolean;
  winnerNumber?: boolean;
  label?: string;
  classes?: ClassesType;
  withHover?: boolean;
} & BetObject;

export const DropzoneBase = React.memo(
  React.forwardRef((props: Props, ref: any) => {
    const {
      className,
      selected,
      winner,
      label,
      children,
      classes: classesProp,
      betType,
      startNumber,
      typeBSide,
      withHover,
      winnerNumber,
      ...restProps
    } = props;
    const classes: ClassesType = useClasses(styles, classesProp);

    return (
      <ButtonBase
        className={clsx(
          classes.root,
          className,
          selected && classes.selected,
          withHover && classes.hover,
          winner && classes.winner,
        )}
        ref={ref}
        data-bettype={betType}
        data-startnumber={startNumber}
        data-typebside={typeBSide}
        {...restProps}
      >
        {!!label && <div className={classes.label}>{label}</div>}
        {winnerNumber && <div className={classes.winnerNumber} />}
        {children}
      </ButtonBase>
    );
  }),
);
