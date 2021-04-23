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
};

const BALL_TRANSX = '195px';
const WHEEL_NUM_ANGLE = 9.72972972972973; // 360 deg / 37 sectors

export const RouletteWheel = (props: Props) => {
  const { className, slots, classes: classesProp, numbers, value } = props;
  const classes = useClasses(styles, classesProp);
  const ballRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const slotsRef: MutableRefObject<HTMLDivElement | null>  = React.useRef(null);

  React.useEffect(() => {
    if (numbers && value !== undefined) {
      if (slotsRef.current && ballRef.current) {
        const rezPos = numbers.indexOf(value);
        const angle = 234 - rezPos * WHEEL_NUM_ANGLE;
        slotsRef.current.style.transform = 'rotate(' + angle + 'deg) translateZ(0)';
        ballRef.current.style.transform = 'rotate(' +  119.5 + 'deg) translateX(' + BALL_TRANSX + ') translateZ(0)';
      }
    }
  }, [value, numbers]);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.bg} />
      <div className={clsx(classes.slots, classes[`slots_${slots}`])} ref={slotsRef} />
      <div className={clsx(classes.ball, value == null && 'd-none')} ref={ballRef} />
    </div>
  );
};

RouletteWheel.defaultProps = {
  slots: 'redblack',
  numbers: [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
}
