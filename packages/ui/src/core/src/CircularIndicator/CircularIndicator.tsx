import React from 'react';
import clsx from 'clsx';

// local files
import { animate } from '../utils/animate';
import { useClasses } from '../hooks/useClasses';
import { imageUpGradient } from './imageUpGradient';
import { imageDownGradient } from './imageDownGradient';
import styles from './CircularIndicator.module.scss';

type ClassesType = {
  root?: string;
  content?: string;
  reverse?: string;
  fadeOut?: string;
};

type Props = {
  className?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  progress?: number;
  animDuration?: number;
  classes?: ClassesType;
  gradientUp?: string;
  gradientDown?: string;
  fadeOut?: boolean;
};

const SEGMENTS = 439;

export const CircularIndicator = (props: Props) => {
  const {
    className,
    reverse,
    children,
    progress: progressProp = 0,
    animDuration = 500,
    classes: classesProp,
    gradientUp = imageUpGradient,
    gradientDown = imageDownGradient,
    fadeOut,
    ...restProps
  } = props;
  const indicatorRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const isLoss = (reverse ? progress : progressProp) < 0;
  const stroke = isLoss ? 'url(#redGrad)' : 'url(#greenGrad)';
  const classes: ClassesType = useClasses(styles, classesProp);

  const targetProgress = React.useMemo(() => {
    if (reverse) {
      return progressProp < 0 ? Math.max(-100, progressProp) : Math.min(100, progressProp);
    } else {
      return Math.min(100, Math.abs(progressProp));
    }
  }, [progressProp, reverse]);

  const segment = React.useMemo(() => {
    return !progress ? SEGMENTS : Math.round((SEGMENTS * (100 - progress)) / 100);
  }, [progress]);

  React.useEffect(() => {
    return animate({
      duration: animDuration,
      draw: (drawProgress) => {
        setProgress(progress + (targetProgress - progress) * drawProgress);
      },
    });
  }, [animDuration, targetProgress]); // eslint-disable-line

  return (
    <div className={clsx(classes.root, className, fadeOut && classes.fadeOut)} {...restProps}>
      <svg height="100%" width="100%" viewBox="0 0 190 190">
        <defs>
          <pattern
            id="greenGrad"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <image x="0" y="0" width="100%" height="100%" href={gradientUp} />
          </pattern>
          <pattern
            id="redGrad"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={gradientDown}
              className={clsx(reverse && classes.reverse)}
            />
          </pattern>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="70"
          stroke={stroke}
          style={{ strokeDashoffset: segment }}
          ref={indicatorRef}
        />
      </svg>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
