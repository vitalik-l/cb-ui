import React from 'react';
import { SvgIcon, SvgIconProps } from '@cb-general/core/SvgIcon';

export const CloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 18 18" {...props}>
      <path
        d="M18 1.575L16.425 0L9 7.425L1.575 0L0 1.575L7.425 9L0 16.425L1.575 18L9 10.575L16.425 18L18 16.425L10.575 9L18 1.575Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
