import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import imageDownGradient from './imageDownGradient';
import imageUpGradient from './imageUpGradient';
import { animate } from '../utils/animate';

const SEGMENTS = 439;

function CircularIndicator(props) {
  const { className, reverse, progress, animation, children } = props;
  const [currentSegment, setCurrentSegment] = useState(SEGMENTS);
  const isLoss = progress < 0;
  const indicatorRef = useRef();
  let stroke;

  useEffect(() => {
    let currentProgress = progress;
    if (progress) {
      if (reverse) {
        currentProgress = progress < 0 ? Math.max(-100, progress) : Math.min(100, progress);
      } else {
        currentProgress = Math.min(100, Math.abs(progress));
      }
    }
    const targetSegment = !currentProgress
      ? SEGMENTS
      : Math.round((SEGMENTS * (100 - currentProgress)) / 100);

    const deltaSegment = targetSegment - currentSegment;

    indicatorRef.current.setAttribute('stroke', progress < 0 ? 'url(#redGrad)' : 'url(#greenGrad)');

    return animate({
      duration: animation.duration,
      draw: (drawProgress) => {
        const newSegment = currentSegment + deltaSegment * drawProgress;
        if (reverse) {
          if (newSegment > SEGMENTS) {
            indicatorRef.current.setAttribute('stroke', 'url(#redGrad)');
          } else {
            indicatorRef.current.setAttribute('stroke', 'url(#greenGrad)');
          }
        }
        setCurrentSegment(newSegment);
      },
    });
  }, [progress, reverse]); /* eslint-disable-line react-hooks/exhaustive-deps */

  if (!reverse) {
    stroke = isLoss ? 'url(#redGrad)' : 'url(#greenGrad)';
  }

  return (
    <div className={classNames('cb-CircularIndicator', className)}>
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
              className={classNames({ reverse })}
            />
          </pattern>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="70"
          stroke={stroke}
          style={{ strokeDashoffset: currentSegment }}
          ref={indicatorRef}
        />
      </svg>
      <div>{children}</div>
    </div>
  );
}

CircularIndicator.defaultProps = {
  animation: {
    duration: 500,
  },
};

CircularIndicator.propTypes = {
  /** animation */
  animation: PropTypes.shape({ duration: PropTypes.number }),
  /** value of progress in percent between 0 to 100 */
  progress: PropTypes.number,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default CircularIndicator;
