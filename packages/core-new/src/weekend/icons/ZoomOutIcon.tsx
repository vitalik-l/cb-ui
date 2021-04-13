import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

export const ZoomOutIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 122.68 126.82" {...props}>
      <g fill="currentColor">
        <line
          x1="4.54"
          y1="122.28"
          x2="43.85"
          y2="82.97"
          stroke="currentColor"
          fill="none"
          strokeWidth={12.85}
          strokeMiterlimit={2.61313}
        />
        <circle
          cx="71.78"
          cy="50.9"
          r="44.48"
          stroke="currentColor"
          fill="none"
          strokeWidth={12.85}
          strokeMiterlimit={2.61313}
        />
        <polygon
          stroke="currentColor"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth={5.14}
          strokeMiterlimit={2.61313}
          points="48.03,55.1 48.03,46.71 95.53,46.71 95.53,55.1 "
        />
      </g>
    </SvgIcon>
  );
};
