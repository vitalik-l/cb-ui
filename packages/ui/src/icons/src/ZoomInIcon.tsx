import React from 'react';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

export const ZoomInIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 79.68 82.36" {...props}>
      <g fill="currentColor">
        <line
          x1="2.95"
          y1="79.41"
          x2="28.48"
          y2="53.88"
          fill="none"
          stroke="currentColor"
          strokeWidth={8.35}
          strokeMiterlimit={2.61313}
        />
        <circle
          cx="46.62"
          cy="33.06"
          r="28.89"
          fill="none"
          stroke="currentColor"
          strokeWidth={8.35}
          strokeMiterlimit={2.61313}
        />
        <polygon
          stroke="currentColor"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth={1.67}
          strokeMiterlimit={2.61313}
          points="43.79,49.18 43.79,35.82 30.49,35.82 30.49,30.23 43.79,30.23 43.79,16.94 49.45,16.94 49.45,30.23 62.74,30.23 62.74,35.82 49.45,35.82 49.45,49.18 "
        />
      </g>
    </SvgIcon>
  );
};
