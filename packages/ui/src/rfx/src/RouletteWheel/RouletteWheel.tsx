import React, {MutableRefObject} from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './RouletteWheel.module.scss';

type Props = {
  className?: string;
  slots?: 'redblack';
  numbers?: number[];
  classes?: any;
  value?: number;
  onWheelStop?: any;
  visibleZone: [from: number, to: number];
  onResult?: any;
};

const BALL_TRANSX = '19.5em';
const WHEEL_NUM_ANGLE = 9.72972972972973; // 360 deg / 37 sectors
const WHEEL_START_SPEED = 5;

export const RouletteWheel: React.FunctionComponent<Props> = (props: Props) => {
  const { className, slots, classes: classesProp, numbers, value, onWheelStop, visibleZone, onResult } = props;
  const classes = useClasses(styles, classesProp);
  const ballRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const slotsRef: MutableRefObject<HTMLDivElement | null>  = React.useRef(null);
  const angle = React.useRef(0);
  const animRef = React.useRef(0);

  const dropBall = React.useCallback(() => {
    if (ballRef.current) {
      ballRef.current.style.display = 'block';
      ballRef.current?.classList.add(classes.ballRotate);
    }
  }, [classes.ballRotate]);

  const wheelStops = React.useCallback(() => {
    window.cancelAnimationFrame(animRef.current);
    if (onWheelStop) {
      onWheelStop();
    }
  }, [onWheelStop]);

  const ballAnimationEnd = React.useCallback(() => {
    ballRef.current?.classList.remove(classes.ballRotate);
    window.cancelAnimationFrame(animRef.current);

    if (value != null && numbers && slotsRef.current && ballRef.current) {
      const rezPos = numbers.indexOf(value);
      let angle = 234 - rezPos * WHEEL_NUM_ANGLE;
      slotsRef.current.style.transform = 'rotate(' + angle + 'deg) translateZ(0)';
      ballRef.current.style.transform = 'rotate(' +  119.5 + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';

      // calculate random angle
      // visible zone - 150-390 deg
      // 241 = (390 - 150 + 1)
      // Math.floor(Math.random() * 241) + 150
      const [from, to] = visibleZone;
      const randDegree = Math.floor(Math.random() * (to - from + 1)) + from;

      const finalRandDegree = angle - (randDegree + 360 + 58.5 + 63);
      let speed = WHEEL_START_SPEED;
      let ballDegrees = 119.5;
      let speedConstant = 0;

      if (onResult) onResult();

      const keepSpinning = () => {
        if (speed <= 0) {
          wheelStops();
          return;
        }
        // condition means that need to start braking
        if (angle <= finalRandDegree/3) {
          if (!speedConstant) speedConstant = (0 - (speed*speed))/(2* (finalRandDegree - finalRandDegree/3));
          speed -= speedConstant;
        }
        angle -= speed;
        if (slotsRef.current) slotsRef.current.style.transform = 'rotate(' + angle + 'deg) translateZ(0)';
        ballDegrees -= speed;
        if(ballRef.current) ballRef.current.style.transform = 'rotate(' + ballDegrees + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
        animRef.current = window.requestAnimationFrame(keepSpinning);
      }
      keepSpinning();
    }
  }, [classes.ballRotate, numbers, value, wheelStops, visibleZone, onResult]);

  const spinUp = React.useCallback(() => {
    if (slotsRef.current) {
      angle.current = angle.current - WHEEL_START_SPEED;
      slotsRef.current.style.transform = 'rotate(' + angle.current + 'deg) translateZ(0)';
      animRef.current = window.requestAnimationFrame(spinUp);
    }
  }, []);

  React.useEffect(() => {
    if (value != null &&  ballRef.current) {
      window.cancelAnimationFrame(animRef.current);
      ballRef.current.style.display = 'none';
      spinUp();
      const tId = window.setTimeout(dropBall, 500);
      return () => {
        window.clearTimeout(tId);
      }
    }
  }, [value, dropBall, spinUp]);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.bg} />
      <div className={clsx(classes.slots, classes[`slots_${slots}`])} ref={slotsRef} />
      <div className={clsx(classes.ball, value == null && 'd-none')} ref={ballRef} onAnimationEnd={ballAnimationEnd} />
    </div>
  );
};

RouletteWheel.defaultProps = {
  slots: 'redblack',
  numbers: [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
  visibleZone: [0, 360], // from 0 to 360 deg
}
