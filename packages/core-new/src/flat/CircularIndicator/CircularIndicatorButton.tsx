import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
// local files
import styles from './FlatCircularIndicatorButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'black';
  theme?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const { className, children, theme, color, ...restProps } = props;

  return (
    <ButtonBase className={styles.CircularIndicatorButton} {...restProps}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 107 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.8"
          cx="53.5"
          cy="53.5"
          r="53.5"
          fill={`url(#${color}_radial)`}
          className={styles.circle}
        />
        <ellipse
          cx="53.5"
          cy="34.5"
          rx="41.5"
          ry="31.5"
          fill="url(#paint1_linear)"
          className={styles.eclipse}
        />
        <defs>
          <radialGradient
            id="black_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(53.0092 64.2982) rotate(28.0977) scale(65.6552)"
          >
            {theme.black.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </radialGradient>
          <radialGradient
            id="green_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(53.0092 64.2982) rotate(28.0977) scale(65.6552)"
          >
            {theme.green.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </radialGradient>
          <radialGradient
            id="red_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(53.0092 64.2982) rotate(28.0977) scale(65.6552)"
          >
            {theme.red.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </radialGradient>
          <linearGradient
            id="paint1_linear"
            x1="53.5"
            y1="3"
            x2="53.2429"
            y2="36.195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.inner}>
        <div className={styles.innerContent}>{children}</div>
      </div>
    </ButtonBase>
  );
};

CircularIndicatorButton.defaultProps = {
  color: 'black',
  theme: {
    black: [
      { offset: 0.3125, stopColor: '#5D5D5D' },
      { offset: 1, stopColor: '' },
    ],
    green: [
      { offset: 0.3125, stopColor: '#6CC911' },
      { offset: 1, stopColor: '#145906' },
    ],
    red: [
      { offset: 0.3125, stopColor: '#E24E32' },
      { offset: 1, stopColor: '#A61C18' },
    ],
  },
};
