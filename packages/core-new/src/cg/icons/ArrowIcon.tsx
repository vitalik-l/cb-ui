import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

type Props = SvgIconProps & {
  left?: boolean;
};

export const ArrowIcon = (props: Props) => {
  const { left, ...restProps } = props;

  return (
    <SvgIcon
      viewBox="0 0 17 18"
      fill="none"
      style={left ? { transform: 'rotate(180deg)' } : undefined}
      {...restProps}
    >
      <path d="M8.49019 0.201929L6.70337 1.96729L12.0631 7.3922L0.0223745 7.31943L0.00719157 9.83158L12.0479 9.90435L6.62301 15.2641L8.38836 17.0509L16.8638 8.67734L8.49019 0.201929Z" fill="currentColor"/>
    </SvgIcon>
  );
};
