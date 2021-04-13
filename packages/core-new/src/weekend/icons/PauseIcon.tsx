import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

export const PauseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 365 365"
      {...props}
    >
      <g fill="currentColor">
        <rect x="74.5" width="73" height="365" />
        <rect x="217.5" width="73" height="365" />
      </g>
    </SvgIcon>
  );
};
