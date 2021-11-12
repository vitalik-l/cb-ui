import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

export const PlusIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 13 13" fill="none" {...props}>
      <path
        d="M6.84908 0.531204L6.84908 0.281203L6.59908 0.281203L5.53716 0.281204L5.28716 0.281204L5.28716 0.531204L5.28716 5.2874L0.53096 5.2874L0.28096 5.2874L0.28096 5.5374V6.59932L0.28096 6.84932L0.53096 6.84932L5.28716 6.84932L5.28716 11.6055L5.28716 11.8555L5.53716 11.8555L6.59908 11.8555L6.84908 11.8555L6.84908 11.6055L6.84908 6.84932L11.6053 6.84932H11.8553L11.8553 6.59932V5.5374L11.8553 5.2874H11.6053L6.84908 5.2874L6.84908 0.531204Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </SvgIcon>
  );
};
