import clsx from 'clsx';
import React, { MutableRefObject } from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';
// local files
import styles from './WkdRouletteWheel.module.scss';

type Props = {
  className?: string;
  slots?: 'redblack' | 'nozero';
  classes?: any;
  value?: number | null;
  onStop?: any;
  onSpin?: any;
  size?: number;
  visibleZone?: [from: number, to: number];
  onResult?: any;
  children?: React.ReactNode;
  disableBorder?: boolean;
};

const NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
  31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
const NUMBERS_NOZERO = NUMBERS.slice(1);
const BALL_TRANSX = '19.5em';
const WHEEL_START_SPEED = 5;
const VISIBLE_ZONE = [0, 360];

export const RouletteWheel = (props: Props) => {
  const {
    className,
    slots,
    classes: classesProp,
    value,
    onSpin,
    onStop,
    visibleZone = VISIBLE_ZONE,
    onResult,
    children,
    disableBorder,
    size,
  } = props;
  const classes = useClasses(styles, classesProp);
  const ballRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const slotsRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const angle = React.useRef(0);
  const animRef = React.useRef(0);
  const numbers = slots === 'nozero' ? NUMBERS_NOZERO : NUMBERS;
  const slotAngle = React.useMemo(() => 360 / numbers.length, [numbers]);
  const prevValue = React.useRef<number | null>();

  const dropBall = React.useCallback(() => {
    if (ballRef.current) {
      ballRef.current.style.display = 'block';
      ballRef.current?.classList.add(classes.ballRotate);
    }
  }, [classes.ballRotate]);

  const wheelStops = React.useCallback(() => {
    window.cancelAnimationFrame(animRef.current);
    if (onStop) {
      onStop();
    }
  }, [onStop]);

  const transformBall = React.useCallback(() => {
    if (value != null && slotsRef.current && ballRef.current) {
      const rezPos = numbers.indexOf(value);
      const angle = 234 - (37 - numbers.length) * slotAngle - rezPos * slotAngle;
      slotsRef.current.style.transform = 'rotate(' + angle + 'deg) translateZ(0)';
      ballRef.current.style.transform =
        'rotate(' + 119.5 + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
      return angle;
    }
  }, [slotAngle, value]);

  const ballAnimationEnd = React.useCallback(() => {
    ballRef.current?.classList.remove(classes.ballRotate);
    window.cancelAnimationFrame(animRef.current);

    if (value != null && numbers && slotsRef.current && ballRef.current) {
      const angle = transformBall();

      if (angle) {
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

        let mutableAngle = angle;
        const keepSpinning = () => {
          if (speed <= 0) {
            wheelStops();
            return;
          }
          // condition means that need to start braking
          if (mutableAngle <= finalRandDegree / 3) {
            if (!speedConstant)
              speedConstant = (0 - speed * speed) / (2 * (finalRandDegree - finalRandDegree / 3));
            speed -= speedConstant;
          }
          mutableAngle -= speed;
          if (slotsRef.current)
            slotsRef.current.style.transform = 'rotate(' + mutableAngle + 'deg) translateZ(0)';
          ballDegrees -= speed;
          if (ballRef.current)
            ballRef.current.style.transform =
              'rotate(' + ballDegrees + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
          animRef.current = window.requestAnimationFrame(keepSpinning);
        };
        keepSpinning();
      }
    }
  }, [
    classes.ballRotate,
    numbers,
    value,
    wheelStops,
    visibleZone,
    onResult,
    slotAngle,
    transformBall,
  ]);

  const spinUp = React.useCallback(() => {
    if (slotsRef.current) {
      angle.current = angle.current - WHEEL_START_SPEED;
      slotsRef.current.style.transform = 'rotate(' + angle.current + 'deg) translateZ(0)';
      animRef.current = window.requestAnimationFrame(spinUp);
    }
  }, []);

  React.useEffect(() => {
    if (value != null && ballRef.current) {
      if (prevValue.current === undefined) {
        // set initial position
        transformBall();
        return;
      }
      // value updated
      if (value !== prevValue.current) {
        window.cancelAnimationFrame(animRef.current);
        ballRef.current.style.display = 'none';
        spinUp();
        const tId = window.setTimeout(dropBall, 500);
        if (onSpin) {
          onSpin();
        }
        return () => {
          window.clearTimeout(tId);
        };
      }
    }
  }, [value, dropBall, spinUp, transformBall]);

  React.useEffect(() => {
    prevValue.current = value ?? null;
  }, [value]);

  return (
    <div
      className={clsx(classes.root, className)}
      style={size ? { fontSize: `${size / +styles.baseSize}rem` } : undefined}
    >
      {!disableBorder && <div className={classes.border} />}
      <div className={classes.wheel}>
        <div className={classes.bg} />
        <div className={clsx(classes.slots, classes[`slots_${slots}`])} ref={slotsRef} />
        <div className={clsx(classes.ball)} ref={ballRef} onAnimationEnd={ballAnimationEnd} />
      </div>
      <div className={classes.child}>{children}</div>
    </div>
  );
};

RouletteWheel.defaultProps = {
  slots: 'redblack',
  visibleZone: [0, 360], // from 0 to 360 deg
};
