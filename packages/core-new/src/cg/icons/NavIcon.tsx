import React from 'react';
import { SvgIcon, SvgIconProps } from '@cb-general/core/SvgIcon';

type Props = SvgIconProps & {
  back?: boolean;
};

export const NavIcon = (props: Props) => {
  const { back, style, ...restProps } = props;

  return (
    <SvgIcon
      width="10"
      height="18"
      viewBox="0 0 10 18"
      style={
        back
          ? {
              transform: 'rotate(180deg)',
              ...style,
            }
          : undefined
      }
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-6.54185e-06 15.9375L1.53124 17.4687L10 8.99999L1.53124 0.531223L-6.28253e-06 2.06247L6.93751 8.99999L-6.54185e-06 15.9375Z"
      />
    </SvgIcon>
  );
};
