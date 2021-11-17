import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

export const CheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 25 25" {...props}>
      <circle cx="12.5" cy="12.5" r="9.5" fill="#00FD7E" />
      <circle cx="12.5" cy="12.5" r="12" stroke="#535561" />
    </SvgIcon>
  );
};
