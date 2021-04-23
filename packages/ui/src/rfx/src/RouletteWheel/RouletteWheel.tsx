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
};

const BALL_TRANSX = '19.5em';
const WHEEL_NUM_ANGLE = 9.72972972972973; // 360 deg / 37 sectors
const WHEEL_START_SPEED = 5;

export const RouletteWheel = (props: Props) => {
  const { className, slots, classes: classesProp, numbers, value } = props;
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

  const ballAnimationEnd = React.useCallback(() => {
    ballRef.current?.classList.remove(classes.ballRotate);
    window.cancelAnimationFrame(animRef.current);
    if (value != null && numbers && slotsRef.current && ballRef.current) {
      const rezPos = numbers.indexOf(value);
      const angle = 234 - rezPos * WHEEL_NUM_ANGLE;
      slotsRef.current.style.transform = 'rotate(' + angle + 'deg) translateZ(0)';
      ballRef.current.style.transform = 'rotate(' +  119.5 + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
    }
  }, [classes.ballRotate, numbers, value]);

  const spinUp = React.useCallback(() => {
    if (slotsRef.current) {
      angle.current = angle.current - WHEEL_START_SPEED;
      slotsRef.current.style.transform = 'rotate(' + angle.current + 'deg) translateZ(0)';
      animRef.current = window.requestAnimationFrame(spinUp);
    }
  }, []);

  // keepSpinning = () => {
  //   if (this.speed <= 0) {
  //     this.wheelStops();
  //     return;
  //   }
  //   this.numOfSpin++;
  //   // condition means that need to start braking
  //   if (this.angle <= this.finalRandDegree/3) {
  //     if (!this.speedConstant) this.speedConstant = (0 - (this.speed*this.speed))/(2* (this.finalRandDegree - this.finalRandDegree/3));
  //     this.speed -= this.speedConstant;
  //   }
  //   this.angle -= this.speed;
  //   this.wheel.style.transform = 'rotate(' + this.angle + 'deg) translateZ(0)';
  //   this.ballDegrees -= this.speed;
  //   this.ball.style.transform = 'rotate(' + this.ballDegrees + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
  //   this.animId = window.requestAnimationFrame(this.keepSpinning);
  // };
  //
  // wheelStops() {
  //   this.displayFinalNumber(false);
  //   window.cancelAnimationFrame(this.animId);
  //   this.animId = null;
  //   this.speed = 0;
  //   this.speedConstant = 0;
  //   gameActions.gameRoundEnds();
  // }

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
}
