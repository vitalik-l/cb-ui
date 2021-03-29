import React from 'react';
import clsx from 'clsx';
import { animate } from '@cb-general/core/utils/animate';

// local files
import { imageUpGradient } from './imageUpGradient';
import { imageDownGradient } from './imageDownGradient';
import styles from './WkdCircularIndicator.module.scss';

type Props = {
  className?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  progress?: number;
  animDuration?: number;
};

const SEGMENTS = 439;

export const CircularIndicator = (props: Props) => {
  const {
    className,
    reverse,
    children,
    progress: progressProp = 0,
    animDuration = 500,
    ...restProps
  } = props;
  const indicatorRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const isLoss = (reverse ? progress : progressProp) < 0;
  const stroke = isLoss ? 'url(#redGrad)' : 'url(#greenGrad)';

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
    <div className={clsx(styles.root, className)} {...restProps}>
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
            <image x="0" y="0" width="100%" height="100%" href={imageUpGradient} />
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
              href={imageDownGradient}
              className={clsx({ [styles.reverse]: reverse })}
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
      <div className={styles.content}>{children}</div>
    </div>
  );
};
