import React from 'react';

// local files
import { DropzoneBase } from './DropzoneBase';
import { useDropzone } from './useDropzone';
import { BET_TYPES } from '../constants';

type Props = React.ComponentProps<DropzoneBase> & {
  Component?: React.ElementType;
};

export const Dropzone = (props: Props) => {
  const { Component = DropzoneBase, ...restProps } = props;
  const { betType, startNumber, typeBSide } = restProps;
  const { selectedNumbers, selectNumbers } = useDropzone();
  const selected =
    betType === BET_TYPES.STRAIGHT &&
    startNumber !== undefined &&
    !!~selectedNumbers.indexOf(startNumber);

  const onMouseEnter = React.useCallback(() => {
    selectNumbers({ betType, startNumber, typeBSide });
  }, [betType, startNumber, typeBSide, selectNumbers]);

  const onMouseLeave = React.useCallback(() => {
    selectNumbers();
  }, [selectNumbers]);

  const withHover = React.useMemo(
    () =>
      betType &&
      !~[BET_TYPES.STRAIGHT, BET_TYPES.SPLIT, BET_TYPES.CORNER, BET_TYPES.STREET].indexOf(betType),
    [betType],
  );

  return (
    <Component
      selected={selected}
      withHover={withHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...restProps}
    />
  );
};
