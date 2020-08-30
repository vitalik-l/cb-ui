import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BezierEasing from 'bezier-easing';
import imageDownGradient from './imageDownGradient';
import imageUpGradient from './imageUpGradient';

const SEGMENTS = 439;

function animate({
  ref, timing, draw, duration,
}) {
  const start = performance.now();

  // иначе не работает Оо
  // eslint-disable-next-line no-shadow
  ref.current = requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    const progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      ref.current = requestAnimationFrame(animate);
    }
  });
}

function CircularIndicator({
  className, reverse, progress, animation, children,
}) {
  const [currentSegment, setCurrentSegment] = useState(SEGMENTS);
  const isLoss = progress < 0;
  const indicatorRef = useRef();
  const animateRef = useRef();
  let stroke;

  useEffect(() => {
    function animateProgress() {
      const isNewLoss = progress < 0;
      let newProgress;
      if (progress) {
        if (reverse) {
          newProgress = progress < 0 ? Math.max(-100, progress) : Math.min(100, progress);
        } else {
          newProgress = Math.min(100, Math.abs(progress));
        }
      }
      const targetSegment = !newProgress
        ? SEGMENTS : Math.round((SEGMENTS * (100 - progress)) / 100);
      const deltaSegment = targetSegment - currentSegment;

      indicatorRef.current.setAttribute('stroke', isNewLoss ? 'url(#redGrad)' : 'url(#greenGrad)');

      animate({
        ref: animateRef,
        timing: BezierEasing(0.25, 0.1, 0.25, 1.0),
        duration: animation.duration,
        draw: (progressValue) => {
          const newSegment = currentSegment + deltaSegment * progressValue;
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
    }

    window.cancelAnimationFrame(animateRef.current);
    animateProgress();

    return () => window.cancelAnimationFrame(animateRef.current);
  }, [progress, reverse]);

  if (!reverse) {
    stroke = isLoss ? 'url(#redGrad)' : 'url(#greenGrad)';
  }

  return (
    <div className={classNames('cb-CircularIndicator', className)}>
      <svg height="100%" width="100%" viewBox="0 0 190 190">
        <defs>
          <pattern id="greenGrad" patternUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <image x="0" y="0" width="100%" height="100%" href={imageUpGradient} />
          </pattern>
          <pattern id="redGrad" patternUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <image x="0" y="0" width="100%" height="100%" href={imageDownGradient} className={classNames({ reverse })} />
          </pattern>
        </defs>
        <circle cx="50%" cy="50%" r="70" stroke={stroke} style={{ strokeDashoffset: currentSegment }} ref={indicatorRef} />
      </svg>
      <div>
        {children}
      </div>
    </div>
  );
}

CircularIndicator.defaultProps = {
  animation: {
    duration: 500,
  },
};

export default CircularIndicator;

CircularIndicator.propTypes = {
  /** animation */
  animation: PropTypes.shape({
    duration: PropTypes.number,
  }),

  /** value of progress in percent between 0 to 100 */
  progress: PropTypes.number,

  className: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.element,
};
